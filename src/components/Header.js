import React from 'react'

import './header.css'


const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className='logo'>
                        <span>UI</span> Design Daily
                    </div>
                    <ul>
                        <li>Designs</li>
                        <li>About</li>
                        <li>Lisence</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header