import React from 'react'
import Course from './Course';
import Chapter from './Chapter'

import './main.css'

const main = () => {
    return (
        <div className='main'>
            <div className='lmain'>
                <div className='content'>
                <div className='course'>
                    <Course />
                </div>
                <div className='chapter'>
                   <Chapter/>
                </div>
                </div>

            </div>
            <div className='rmain'></div>
        </div>
    )
}

export default main