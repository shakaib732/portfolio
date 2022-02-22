import React from 'react'
import './About.css'
import me from './me.jpg'
function About() {
  return (
    <div className='container__Section' id='About'>
      <div className='aboutme'>
        <h1 className='section__heading1'>
          <span style={{ color: '#64ffda', fontSize: '30px' }}>01.&nbsp;</span> About me
        </h1>
        <div className='inner'>
          <div className='text'>
            <p >
              My interest in the <span style={{ color: '#64ffda' }}>Web Development</span> started back in 2017 when I started editing Bootstrap templates. This accidently landed me into the world of <span style={{ color: '#64ffda' }}>HTML, CSS and JavaScript</span> !<br></br>
              I have not looked back since the day I started working on it. My journey with web development has been that of a curious kid given a <span style={{ color: '#64ffda' }}>cotton candy</span> which I have relished, yet always troubleshooted with the question of <span style={{ color: '#64ffda' }}>how it is made?</span>
              <br></br>
              <br></br>
              Fast forwarding to the present day, I currently work with a startup company. My main focus these days is upon building <span style={{ color: '#64ffda' }}>accessible, inclusive products and digital experiences</span> at Emmett Technologies.
              <br></br>
              <br></br>
              Here are a few technologies I've been working with recently:
                <ul className='ul1'>
                  <li>HTML5</li>
                  <li>NodeJS</li>
                  <li>CSS3</li>
                  <li>Express</li>
                  <li>Javascript</li>
                  <li>Mysql</li>
                  <li>Bootstrap</li>
                  <li>Git</li>
                  <li>React</li>
                  <li>Github</li>
                </ul>
              
            </p>
          </div>
          <div className='pic'>
            <img src={me} alt='shakaib' />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default About
