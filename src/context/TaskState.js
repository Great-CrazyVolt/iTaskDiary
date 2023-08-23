import React, {useState, useEffect} from 'react'
import TaskContext from "./TaskContext";
import { collection, addDoc, doc, updateDoc, deleteDoc, query, where, onSnapshot } from "firebase/firestore"; 
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../firebase'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const TaskState = (props) => {

    // Task retreving from Firebase Database
    const [Task, setTask] = useState([])
    const [userRole, setUserRole] = useState('')
    
    //Progress of fileupload
    const [progress, setProgress] = useState(0)

    const addTask = async (task, url) => {
        await addDoc(collection(db, '/iTask'), {
            task,
            createdAt: new Date(),
            updatedAt: new Date(),
            url
        }) 
    }

    const updateTask = async (Task, id) => {
        
        await updateDoc(doc(db, 'iTask', id), {
            task: Task,
            updatedAt: new Date()
        })
    }

    const deleteDocument = async (id) => {
        await deleteDoc(doc(db, 'iTask', id))
    }

    const deleteField = async (field, fieldName) => {
        await updateDoc(doc(db, 'iTask', field), {
            fieldName: deleteDoc()
        })
    }

    const reaData = async () => {
        const q = query(collection(db, 'iTask'))

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const newTask = []
            QuerySnapshot.forEach((doc) => {
                newTask.push({
                    ...doc.data(),
                    id: doc.id
                })
            })
            setTask(newTask)
        })

        return () => unsubscribe
    }

    useEffect(() => {
        reaData()
    }, [])

    const uploadFile = (file) => {
        return new Promise(function (resolve, reject) {
            const storageRef = ref(storage, `file/${file.name}`)
            const uploadTask = uploadBytesResumable(storageRef, file)
    
            //Update progress bar
            uploadTask.on('state_changed',
                function progress(snapshot){
                    const percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                    setProgress(percentage)
                },
                function error(err){
                    console.log(err)
                    reject(err)
                },
                async function complete(){
                    const url = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve(url)
                }
            );
        });
    }
    
    //###################################################################################
    // User Authentication

    const registerUser = async (authentication) => {

        const {email, password} = authentication
    
        const auth = getAuth(); 
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            addAuthentication(userCredential.user.uid)

        } catch (error) {
            return (error)
        }
        // createUserWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     // Signed in 
        //     // console.log(userCredential.user);
        //     addAuthentication(userCredential.user.uid)
        //     // ...
        // })
        // .catch((error) => {
        //     return (error.message)
        // });

    }

    const loginUser = async (authentication) => {
        const {email, password} = authentication
    
        const auth = getAuth();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            findUser(userCredential.user.uid)
            
        } catch (error) {
            return (error)
        }
        // .then((userCredential) => {
        //     // Signed in 
            
        //     findUser(userCredential.user.uid)
        //     // ...
        // })
        // .catch((error) => {
        //     return (error)
        // });
    }

    const signout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            setUserRole('')

        }).catch((error) => {
            // An error happened.
            return (error)
        });
    }
    
    const addAuthentication = async (UserId) => {
        await addDoc(collection(db, '/iTaskUsers'), {
            uid: UserId,
            user: 'guest'
        }) 
    }
    
    const findUser = (userId) => {
        const q = query(collection(db, "iTaskUsers"), where("uid", "==", userId));
        onSnapshot(q, (querySnapshot) => {
            let user = ''
            querySnapshot.forEach((doc) => {
                user = doc.data().user;
            });
            setUserRole(user)
        });
    
        // return userInfo
    }

    return (
        <div>
            <TaskContext.Provider value={{addTask, updateTask, deleteDocument, deleteField, Task, uploadFile, progress, registerUser, loginUser, userRole, signout}}>
                {props.children}
            </TaskContext.Provider>
        </div>
    )
}

export default TaskState
