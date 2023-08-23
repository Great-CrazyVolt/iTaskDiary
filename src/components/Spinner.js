import React from 'react'
import LoadingRing from './pictures/DoubleRing.gif'

const Spinner = () => {
    return (
        <div className="text-center"> 
            
            <img src={LoadingRing} alt='Loading'/>
            {/* <div class={`spinner-border text-danger`} role="status"></div> */}
        </div>
    )
}

export default Spinner
