import { Navbar, Button, Modal } from 'react-bulma-components'
import './App.css';
import Logo from './images/SS_logo.svg'
import Home from './pages/home.js'
import './bulma.min.css'
import './pages/home.css'
import StarBackground from './images/starbackground.mp4'
import { useEffect, useState } from 'react'
import CVPDF from './SS_WebDeveloper_Resume.pdf'

function App() {
  useEffect(() => {
    let vid2 = document.getElementById('backgroundVideo')
    vid2.playbackRate = 0.20
  }, [])
  const [openModal, setOpenModal] = useState();
  return (
    <>
      <video autoPlay muted loop preload='true' id='backgroundVideo'>
        <source src={StarBackground} type='video/mp4' />
      </video>
      <Navbar className='navStyle' style={{ position: 'fixed', right: '0', left: '0', backgroundColor: 'rgba(230, 244, 255, 0.93)', width: '75%', marginLeft: 'auto', marginRight: 'auto', marginTop: '18px', borderRadius: '6px', justifyContent: 'space-between', display: 'flex', alignItems: 'center', height: '8vh' }}>
        <Navbar.Brand>
          <Navbar.Item href="/">
            <img
              id='SSLogo'
              alt="Samuel Steinberg Logo"
              src={Logo}
              style={{ maxHeight: '100%', height: '8vh', marginLeft: '30px' }}
            />
          </Navbar.Item>
        </Navbar.Brand>
        <div>
          <Button className='navButton' onClick={() => {
            return setOpenModal('card');
          }}>
            C V
          </Button>
          <a href='https://github.com/ssterling27'>
            <Button className='navButton'>
              Github
            </Button>
          </a>
          <a href='https://www.linkedin.com/in/samuel-steinberg-a22323225/'>
            <Button className='navButton'>
              LinkedIn
            </Button></a>
          <a href='mailto: samuel.steinberg27@gmail.com'>
            <Button className='navButton'>
              Contact
            </Button>
          </a>
        </div>
      </Navbar>
      <Modal show={openModal === 'card'} onClose={() => {
        return setOpenModal();
      }}>
        <Modal.Content style={{ width: '85%', height: '100%', overflow: 'hidden' }}>
          <iframe title='CV' src={CVPDF} width='100%' height='100%'></iframe>
        </Modal.Content>
      </Modal>
      <Home />
      </>
  );
}

export default App;
