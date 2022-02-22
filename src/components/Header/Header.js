import React, { useState } from 'react'
import './Header.css'
import logo from './logo.svg'
import ham from './hamberger.svg'
import { Link } from 'react-scroll'
import resume from './Resume.pdf'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    function change() {
        if (isOpen == true) {
            setIsOpen(false)
        }
        // else{
        //     setIsOpen(false)
        // }
    }


    return (
        <>
            <nav className='header'>
                <div className='header__logo'>
                    <img height={150} src={logo} alt='logo' />
                </div>

                <div className={isOpen == false ? 'menu__Link' : 'menu__mobileLink'}>
                    <ul className={isOpen == false ? 'links' : 'mobile__links'}>
                        <li><Link to='About' smooth={true} onClick={change} duration={1300}><span>01.</span> About </Link></li>
                        <li><Link to='Exprience' smooth={true} onClick={change} duration={1300}><span>02.</span> Experience</Link></li>
                        <li><Link to='Work' smooth={true} onClick={change} duration={1300}><span>03.</span> Work</Link></li>
                        <li><Link to='Contact' smooth={true} onClick={change} duration={1300}><span>04.</span> Contact</Link></li>
                    </ul>
                </div>
                <div className='resume'>
                    <div className='button'><a className="button" href={resume} download="Resume.pdf">
                        Resume
                    </a></div>
                </div>
                <div className='hamberger'>
                    <a href='#' onClick={() => setIsOpen(!isOpen)}>
                        <img height={80} width={100} src={ham} alt='logo' />
                    </a>
                </div>
            </nav>

        </>

    )



}

export default Header
