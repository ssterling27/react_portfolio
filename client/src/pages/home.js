import './home.css'
import { Columns, Button } from 'react-bulma-components'
import Colorful from '../images/colorful.svg'
import Website from '../images/website.svg'
import Development from '../images/developer.svg'
import HTMLIcon from '../images/html.png'
import CSSIcon from '../images/css.png'
import JSIcon from '../images/js.png'
import ReactIcon from '../images/react.png'
import JQueryIcon from '../images/jquery.png'
import MongoDBIcon from '../images/mongodb.svg'
import SQLIcon from '../images/sql.png'
import GraphQLIcon from '../images/graphql.svg'
import UnitTestingIcon from '../images/unittesting.png'
import HerokuIcon from '../images/heroku.png'
import PhotoshopIcon from '../images/photoshop.png'
import IllustratorIcon from '../images/illustrator.png'
import OfficeIcon from '../images/office.png'
import SEOIcon from '../images/seo.png'
import GoogleAnalyticsIcon from '../images/googleanalytics.svg'
import ENRoutePic from '../images/en-route.jpg'
import MoodifyPic from '../images/moodify.png'
import SynergizePic from '../images/synergize.png'

const Home = () => {
  return (
    <>
      <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
        <div className='content'>
          <p className='title'>SAMUEL</p>
          <p className='title'>STEINBERG</p>
          <p className='subtitle'><span className='creator'>Creator</span> / <span className='designer'>Designer</span> / <span className='developer'>Developer</span></p>
          <p className='paragraph' style={{ color: 'white', marginLeft: '2%', marginRight: '2%', marginBottom: '2%' }}>Hi, I'm Sam. I'm relatively new to the world of web development, but I've made great progress in a short amount of time. I'm experienced in HTML, CSS, JavaScript, React, database arthitecture, and more. It may doubtful for me to have a true grasp of these topics given their depth and the short timespan, but I've put in a huge amount of effort and have gotten great results. You can check out my projects and skills below for yourself. I'm confident in my ability to get results and hone my skills even further as I continue to learn. Whatever the challenge, I'm up for it.</p>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ width: '85%', backgroundColor: 'rgba(230, 244, 255, 0.93)', margin: 'auto', marginBottom: '5vh', borderRadius: '4px', maxWidth: '1800px' }}>
          <Columns>
            <Columns.Column style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img alt='Colorful Mandala' src={Colorful} style={{ height: '45vh' }} />
            </Columns.Column>
            <Columns.Column style={{ marginRight: '5%', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
              <p className='creator' style={{ fontSize: '4em', textAlign: 'center', color: 'black' }}>Creator</p>
              <p className='paragraph'>With a background in creative pursuits like writing and photography, I excel at brainstorming new ideas and coming up with innovative ways to approach projects.</p>
            </Columns.Column>
          </Columns>
        </div>
        <div style={{ width: '85%', backgroundColor: 'rgba(230, 244, 255, 0.93)', margin: 'auto', marginBottom: '5vh', borderRadius: '4px', maxWidth: '1800px' }}>
          <Columns>
            <Columns.Column style={{ marginLeft: '3%', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
              <p className='designer' style={{ fontSize: '4em', textAlign: 'center', color: 'black' }}>Designer</p>
              <p className='paragraph'>Experience with graphic design through Photoshop, Illustrator, HTML, and CSS allow me to make superior-looking sites.</p>
            </Columns.Column>
            <Columns.Column>
              <img alt='Web design' src={Website} style={{ height: '45vh' }} />
            </Columns.Column>
          </Columns>
        </div>
        <div style={{ width: '85%', backgroundColor: 'rgba(230, 244, 255, 0.93)', margin: 'auto', marginBottom: '5vh', borderRadius: '4px', maxWidth: '1800px' }}>
          <Columns>
            <Columns.Column style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img alt='Web development' src={Development} style={{ height: '45vh' }} />
            </Columns.Column>
            <Columns.Column style={{ marginRight: '5%', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
              <p className='developer' style={{ fontSize: '4em', textAlign: 'center', color: 'black' }}>Developer</p>
              <p className='paragraph'>Expertise in JavaScript, React, databases, and more give me the tools to program excellent functionality in all my work.</p>
            </Columns.Column>
          </Columns>
        </div>
        <div className='skillsdiv' style={{ width: '90%', backgroundColor: 'rgba(205, 244, 255, 0.93)', margin: 'auto', marginBottom: '1vh', borderRadius: '4px', maxWidth: '1200px' }}>
          <p className='header'>Skills</p>
          <Columns style={{ justifyContent: 'space-around' }}>
            <Columns.Column className='skill' size='2'>
              <img alt='HTML' src={HTMLIcon} /><br />
              HTML
            </Columns.Column>
            <Columns.Column className='skill' size='2'>
              <img alt='CSS' src={CSSIcon} /><br />
              CSS
            </Columns.Column>
            <Columns.Column className='skill' size='2'>
              <img alt='JavaScript' src={JSIcon} /><br />
              JavaScript
            </Columns.Column>
            <Columns.Column className='skill' size='2'>
              <img alt='React.js' src={ReactIcon} /><br />
              React.js
            </Columns.Column>
            <Columns.Column className='skill' size='2'>
              <img alt='jQuery' src={JQueryIcon} /><br />
              jQuery
            </Columns.Column>
            <Columns.Column className='skill' size='2'>
              <img alt='MongoDB' src={MongoDBIcon} /><br />
              MongoDB
            </Columns.Column>
            <Columns.Column className='skill' size='2'>
              <img alt='SQL' src={SQLIcon} /><br />
              SQL
            </Columns.Column>
            <Columns.Column className='skill' size='2'>
              <img alt='GraphQL' src={GraphQLIcon} /><br />
              GraphQL
            </Columns.Column>
            <Columns.Column className='skill' size='2' style={{ fontSize: '2em' }}>
              <img alt='Unit Testing' src={UnitTestingIcon} /><br />
              Unit Testing
            </Columns.Column>
            <Columns.Column className='skill' size='2'>
              <img alt='Heroku' src={HerokuIcon} /><br />
              Heroku
            </Columns.Column>
            <Columns.Column className='skill' size='2'>
              <img alt='Photoshop' src={PhotoshopIcon} /><br />
              Photoshop
            </Columns.Column>
            <Columns.Column className='skill' size='2'>
              <img alt='Illustrator' src={IllustratorIcon} /><br />
              Illustrator
            </Columns.Column>
            <Columns.Column className='skill' size='2' style={{ fontSize: '1.5em' }}>
              <img alt='Microsoft Office' src={OfficeIcon} /><br />
              Microsoft Office Suite
            </Columns.Column>
            <Columns.Column className='skill' size='2' style={{ fontSize: '1.5em' }}>
              <img alt='Search Engine Optimization' src={SEOIcon} /><br />
              Search Engine Optimization
            </Columns.Column>
            <Columns.Column className='skill' size='2' style={{ fontSize: '1.5em' }}>
              <img alt='Google Analytics' src={GoogleAnalyticsIcon} /><br />
              Google Analytics
            </Columns.Column>
          </Columns>
        </div>
        <p className='header' style={{ fontSize: '4.5em', color: 'white', marginBottom: '2vh' }}>Projects</p>
        <div style={{ width: '95%', backgroundColor: 'rgba(225, 244, 255, 0.93)', margin: 'auto', marginBottom: '5vh', borderRadius: '4px', maxWidth: '1900px' }}>
          <Columns style={{ margin: '10px' }}>
            <Columns.Column size='4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <a href='https://ssterling27.github.io/EN-Route/'><Button className='header navButton' style={{ fontSize: '3.5em', margin: 'auto', marginBottom: '10px' }}>EN-Route</Button></a>
              <img style={{ borderRadius: '4px', marginBottom: '15px' }} alt='EN-Route' src={ENRoutePic} />
              <p className='paragraph' style={{ fontSize: '1.35em' }}>EN-Route is built to be the perfect roadtrip entertainment planner. Users can calculate their trip time using a mapping API, search for TV shows and movies through the OMDB API, and easily track how much time is left in each trip. No accounts are necessary. All trips are tracked through Local Storage, and the site is built with HTML, CSS, and JavaScript, with Bulma as the base Styling Library.</p>
            </Columns.Column>
            <Columns.Column size='4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <a href='https://moodify-27.herokuapp.com'><Button className='header navButton' style={{ fontSize: '3.5em', margin: 'auto', marginBottom: '10px' }}>Moodify</Button></a>
              <img style={{ borderRadius: '4px', marginBottom: '15px' }} alt='Moodify' src={MoodifyPic} />
              <p className='paragraph' style={{ fontSize: '1.35em' }}>Moodify offers two key features: public playlists and mood playlists. Users can add custom moods to songs they add to playlists and sort by them later. They can also publish playlists for anyone to see and edit, and enjoy the retro 80's visual style. All playlists are stored using a SQL database with accounts handled through Passport. The site is built on HTML, CSS, and JavaScript, with Foundation for styling.</p>
            </Columns.Column>
            <Columns.Column size='4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <a href='https://synergize-27.herokuapp.com'><Button className='header navButton' style={{ fontSize: '3.5em', margin: 'auto', marginBottom: '10px' }}>Synergize</Button></a>
              <img style={{ borderRadius: '4px', marginBottom: '15px' }} alt='Synergize' src={SynergizePic} />
              <p className='paragraph' style={{ fontSize: '1.35em' }}>Synergize makes planning with friends a breeze. Users can schedule their activities and add their friends through an easy search. Select a friend and desired day, and the app will tell them all the times they're both available. Synergize is built with React and MaterialUI, using MongoDB for data and Passport for authentication. The site also uses a Parallax effect to simulate the sun setting as users scroll.</p>
            </Columns.Column>
          </Columns>
        </div>
        <div style={{ textAlign: 'center' }}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    </>
  )
}

export default Home