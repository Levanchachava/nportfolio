import React from 'react'
import './main.css'
import nt from './netfliximg.PNG'
import ex from './excercise.PNG'
import mr from './movier.PNG'
import re from './restaurantsite.PNG'
import recipe from './recipeimg.PNG'
import bsn from './business.PNG'
import ecomm from './ecommimg.PNG'
import gpt from './gpt3.PNG'


function Main() {
  return (
    <div className='main-cont'>
        <h1>Welcome to <br/> My Personal Portfolio</h1>
        <div className='line' />
        <h4>Projects</h4>
        <div className='projects-cont' id='projects'>
            <a href='https://animated-zabaione-1f5d2c.netlify.app/' target='_blank' >
                <div className='proj-div'>
                    <img src={nt} />
                    <h3>Netflix Clone</h3>
                    <div className='tech-cont'>
                        <p>#react</p>
                        <p>#Firebase</p>
                    </div>
                </div>
            </a>
            <a href='https://lambent-tartufo-a07239.netlify.app/' target='_blank'>
                <div className='proj-div' >
                    <img src={ex} />
                    
                        <h3>Exercise WebSite</h3>
                        <p>#react</p>
                </div>
            </a>
            <a href='https://loquacious-conkies-f0d70c.netlify.app/' target='_blank'>
                <div className='proj-div' >
                    <img src={mr} />
                    <h3>Movie WebSite</h3>
                    <div className='tech-cont'>
                        <p>#react</p>
                        <p>#redux</p>
                    </div>
                </div>
            </a>
            <a href='https://aesthetic-cucurucho-8c075f.netlify.app/' target='_blank'>
                <div className='proj-div' >
                    <img src={re} />
                    <h3>Restaurant WebSite</h3>
                    <p>#react</p>
                </div>
            </a>
            <a href='https://luminous-toffee-fdc367.netlify.app/' target='_blank'>
                <div className='proj-div' >
                    <img src={recipe} />
                    <h3>Recipe WebSite</h3>
                    <p>#react</p>
                </div>
            </a>
            <a href='https://venerable-cajeta-07eb86.netlify.app/' target='_blank'>
                <div className='proj-div' >
                    <img src={ecomm} />
                    <h3>Ecommerce WebSite</h3>
                    <p>#react</p>
                </div>
            </a>
            <a href='https://zippy-treacle-243f31.netlify.app/' target='_blank'>
                <div className='proj-div' >
                    <img src={gpt} />
                    <h3>GPT-3 WebSite</h3>
                    <p>#react</p>
                </div>
            </a>
            <a href='https://reliable-dusk-8d266e.netlify.app/' target='_blank'>
                <div className='proj-div' >
                    <img src={bsn} />
                    <h3>Bank WebSite</h3>
                    <p>#react</p>
                </div>
            </a>
        </div>
        <br/>
        <div className='line' />
        <div className='skill-cont' id='skills' >
            <h1 style={{margin: "25px 0" }} >My Skills</h1>
            <div className='skill-front'>
                <h2>Front End</h2>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Redux</span>
            </div>
            <div className='skill-back'>
                <h2>Back End</h2>
                <span>C#</span>
                <span>MySQL</span>
            </div>
        </div>
        <div className='line' />
        <div className='aboutme'>
            <h1>About Me</h1>
            <p>I am Levan Chachava, Junior Front End Developer, 
                I want to start working as a front end developer at the entry level
                 and develop in this field and learn many other technologies.
            </p>
        </div>
        <hr className='hr' />
        <div className='contact' id='about'>
            <div className='num'>
                <span>Call</span>
                <p>568 41 67 97</p>

            </div>
            <div className='gm'>
                <span>Gmail</span>
                <p>chachava237@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Main