import React from 'react'

const Dropdown = ( {event} ) => {

    return(
        <div className='dropdown'>
            <div className='dropdown-btn'>Choose a University</div>  
            <div className='dropdown-content'>
                <div className='dropdown-item'>
                    University 1
                </div>
                <div className='dropdown-item'>
                    University 2
                </div>
            </div>
        </div>
    )

}

export default Dropdown;
