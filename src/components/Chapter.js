// import React, { useState } from 'react';

// const Chapter = () => {
//     const [value, setValue] = useState(0);

//     const handleChange = (event) => {
//         const newValue = parseInt(event.target.value);
//         setValue(newValue);
//     };
//     return (
//         <div className=''>
//             <div className='chapter-head'>
//                 <h4>CHAPTER</h4>
//                 <div className='range'>
//                     {/* <span className='bar'></span> */}

//                     <input
//                         type="range"
//                         min={0}
//                         max={9}
//                         value={value}
//                         onChange={handleChange}
//                         className="custom-range"
//                     />

//                     <p className='challenges'>{value}/9 Challenges</p>
//                 </div>
//             </div>
//             <p>Callbacks & Closures</p>
//             <div className='continue'>
//                 <button className='btn'>Continue</button>
//             </div>
//         </div>

//     )
// }

// export default Chapter

import React, { useState, useEffect } from 'react';

const Chapter = () => {
    const [challenges, setChallenges] = useState(6);
    const [maxChallenges] = useState(9);
    const [value, setValue] = useState(0);
    const [dragging, setDragging] = useState(true);

    const handleMouseDown = (e) => {
        setDragging(true);
        updateValue(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (dragging) {
            updateValue(e.clientX);
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    const updateValue = (clientX) => {
        const rangeDiv = document.getElementById('custom-range');
        const rect = rangeDiv.getBoundingClientRect();
        const offsetX = clientX - rect.left;
        const percentage = (offsetX / rect.width) * 100;

        if (percentage >= 0 && percentage <= 100) {
            setValue(percentage);
        }
    };

    useEffect(() => {
        // Update the challenges count based on the custom range value
        const newChallenges = Math.round((value / 100) * maxChallenges);
        setChallenges(newChallenges);
    }, [value, maxChallenges]);

    const rangeStyle = {
        width: `${value}%`,
    };

    return (
        <div className=''>
            <div className='chapter-head'>
                <h4>CHAPTER</h4>
                <div
                    id="custom-range"
                    className='custom-range'
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    <div
                        className='range-bar'
                        style={rangeStyle}
                    ></div>
                    <div
                        className='range-thumb'
                        style={{ left: `${value}%` }}
                    ></div>
                    <p className='challenges'>{challenges}/{maxChallenges} Challenges</p>
                </div>
            </div>
            <p>Callbacks & Closures</p>
            <div className='continue'>
                <button className='btn'>Continue</button>
            </div>
        </div>
    );
};

export default Chapter;
