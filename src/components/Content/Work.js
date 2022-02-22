import React from 'react'
import './Work.css'
import git from './git.png'
import big from './big.png'



function Work() {
    return (
        <>
            <div className='work__Section' id='Work'>
                <div className='work'>
                    <h1 className='work__heading1'>
                        <span style={{ color: '#64ffda', fontSize: '30px' }}>03.&nbsp;</span> Things I've Built
                    </h1>
                </div>
            </div>
            <div className="project-container">
                <div className="project">
                    <div class="project-content">
                        <div className="project-label">DICTIONARY BASED ON TEXT FILES FOR PERSONALITY IDENTIFICATION</div>
                        <h4 className="project-title">College Project.</h4>
                        <div className="project-details">
                            <p className='workP' >A simple project on Python using Natural Language Toolkit to create a dictionary for automatic recognition of the Big-5 personality traits.</p>
                            
                            <ul className='workUl'>
                                <li>Python</li>
                                <li>NLP 3.7</li>
                                <li>PyCharm</li>
                                <li><a href='https://github.com/shakaib732/Personality_Identification'><img className="git-logo" src={git} alt='shakaib' /></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="project-img">
                        <img src={big} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Work
