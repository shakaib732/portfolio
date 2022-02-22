
import React, { useState } from 'react'
import './Exprience.css'

function Exprience() {
  const [isIntern, setisIntern] = useState('none');
  const [isAssociate, setisAssociate] = useState('none');
  const [isConsultant, setisConsultant] = useState('block');

  function intern() {
    if (isIntern == 'none') {
      setisIntern('block');
      setisAssociate('none');
      setisConsultant('none');
    } 
  }
  function associate() {
    if (isAssociate == 'none') {
      setisAssociate('block');
      setisIntern('none');
      setisConsultant('none');
    } 
  }
  function consultant() {
    if (isConsultant == 'none') {
      setisConsultant('block');
      setisAssociate('none');
      setisIntern('none');
    }
  }


  return (
    <>
      <div className='exprience__Section' id='Exprience'>
        <div className='exprience'>
          <h1 className='exprience__heading1'>
            <span style={{ color: '#64ffda', fontSize: '30px' }}>02.&nbsp;</span> Where I've worked
          </h1>
        </div>
      </div>
      <div className='main__Section'>
        <div className='main1'>
          <div className='left'>
            <ul className='designation'>
              <li onClick={consultant}>As An <span style={{ color: '#64ffda' }}>Associate Consultant</span></li>
              <li onClick={associate}>As An <span style={{ color: '#64ffda' }}>Associate</span></li>
              <li onClick={intern}>As An <span style={{ color: '#64ffda' }}>Intern</span></li>
            </ul>
          </div>
          <div className='right'>
            <div className='consultant' style={{ display: isConsultant }}>
              <h2>@Emmett Technologies</h2>
              <h3>Present</h3>
              <p>Building a <span style={{ color: '#64ffda' }}>SaaS</span> based Web Application that offers Coaching Institutes A Complete <span style={{ color: '#64ffda' }}>optical mark recogniction solution</span>, from designing to evaluating omr sheets.</p>
              <p>Developed an <span style={{ color: '#64ffda' }}>in-house Algorithm</span> to detect the marked options from  the omr sheet with an accuracy of <span style={{ color: '#64ffda' }}>99.9%</span></p>
              <ul className='consultant__tech'>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Node JS</li>
                <li>Express JS</li>
                <li>MySQL</li>
                <li>Bootstrap</li>
                <li>Google Cloud Platform</li>
              </ul>
            </div>
            <div className='associate' style={{ display: isAssociate }}>
              <h2>@Emmett Technologies</h2>
              <h3>20<sup>th</sup> Feburary 2020</h3>
              <p>Built An <span style={{ color: '#64ffda' }}>android app</span> which rates  and scores driver in real time-with point system.</p>
              <p>It Uses the rear camera  to detect the traffic light, traffic signal with an Acccuracy of <span style={{ color: '#64ffda' }}>95%</span> with help of <span style={{ color: '#64ffda' }}>Artificial Intelligence</span></p>
              <p>It also detects <span style={{ color: '#64ffda' }}>Harsh braking</span>Harsh braking, <span style={{ color: '#64ffda' }}>Harsh acceleration</span> and <span style={{ color: '#64ffda' }}>Speeding</span> via device's GPS and uploads the daily score in the servr </p>
              <ul className='associate__tech'>
                <li>Java</li>
                <li>Python</li>
                <li>XML</li>
                <li>SQLite</li>
                <li>Tensorflow</li>
              </ul>
            </div>
            <div className='inter' style={{ display: isIntern }}>
              <h2>@Emmett Technologies</h2>
              <h3>17<sup>th</sup> August 2019</h3>
              <p>Built and shipped a <span style={{ color: '#64ffda' }}>Chat Base System</span> in an E-Commerce App Using Google's Firebase,</p>
              <p>So That The Client can chat to different client in real time.</p>
              <ul className='inter__tech'>
                <li>Java</li>
                <li>XML</li>
                <li>SQLite</li>
              </ul>
            </div>


          </div>
        </div>
      </div>
    </>
  )


}

export default Exprience
