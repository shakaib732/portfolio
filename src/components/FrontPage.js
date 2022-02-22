import React, { useEffect, useState } from 'react'
import './FrontPage.css'
import Header from './Header/Header'
import SplashScreen from './SplashScreen/SplashScreen'
import Content from './Content/Content'
import About from './Content/About'
import Exprience from './Content/Exprience'
import Work from './Content/Work'
import Contact from './Content/Contact'



const FrontPage = ({ variant, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(true)

    // On componentDidMount set the timer
    useEffect(() => {
        const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setShow(false)
        }, 4700)

        return () => {
            clearTimeout(timeId)
        }
    }, []);

    // If show is false the component will return null and stop here
    if (!show) {
        return (
            <>
                <Header />
                <Content />
                <About />
                <Exprience />
                <Work />
                <Contact />

            </>

        )
    }
    return (
        <SplashScreen />
    )


}

export default FrontPage
