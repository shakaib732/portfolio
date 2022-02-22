import React from 'react'
import './Content.css'

function Content() {
    return (
        <>
            <div className='container1'>
                <div className='greetings'>
                    <div className="heading1">
                        <h2 className='one'>Hello, My Name is</h2>
                    </div>
                    <div className="heading2">
                        <h1 className='two'>Shakaib Khan.</h1>
                    </div>
                    <div className="heading3">
                        <h1 className='three'>I build things for the <span id='correct'>Web</span></h1>
                    </div>
                    <div className="heading4">
                        <p className='four'>
                            I’m a software engineer, and I love to bring ideas live to the screen.<br></br>
                            Currently, I’m working on a Cloud based product, with SaaS architecture  at <a style={{ color: '#64ffda', textDecoration: 'none' }} href='https://in.linkedin.com/company/emmetttechnologiespvt.ltd.'>Emmett</a> Technologies.
                        </p>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Content
