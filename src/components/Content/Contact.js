import React from 'react'
import './Contact.css'
import git from './git.png'

function Contact() {
    function click() {

        let a = document.createElement('a');
        a.target = '_blank';
        a.href = 'mailto:shakaibkhan732@gmail.com?body=Hello';
        a.click();
    }
    return (
        <>
            <div className='container__Section' id='Contact'>
                <div className='aboutme'>
                    <h1 className='section__heading1'>
                        <span style={{ color: '#64ffda', fontSize: '30px' }}>04.&nbsp;</span> Get in touch
                    </h1>
                </div>
            </div>
            <div className='contact_main'>
                <div className='contact_heading'>
                    <h3>I am Currently looking for new oppurtunities, My inbox is always open.</h3>
                </div>
                <div className='contact_message'>
                    <form className='contact_form' onSubmit={click} enctype="text/plain">


                        <textarea placeholder='Say Hello! :)' id='hello' name="body"></textarea>

                        <br />
                        <input className='contact_button' type="submit" value="Say Hello" />
                    </form>
                </div>
                {/* <footer className='footer'>
                    <h3 className='design'>Designed and Built By Shakaib Khan</h3>
                    <a href='https://github.com/shakaib732/Personality_Identification'><img className="git-logo" src={git} alt='shakaib' /></a>

                </footer> */}
            </div>

        </>
    )
}

export default Contact
