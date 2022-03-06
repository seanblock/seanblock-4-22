import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

// Components
import ButtonLink from './component/ButtonLink';
import Header from './component/Header';

// Pages
import Portfolio from './portfolio/Portfolio';
import Skills from './skills/Skills';
import About from './about/About';

// Context
import { ClientContext } from './context/ClientContext'

function App() {

  // States
  const [open, setOpen] = useState(false)

  
  return (
    <ClientContext.Provider value={{
      open, setOpen
    }}>
    <Container fluid id="homepage">
      <Header />
      <div id="portfolio-link" className="links">
        <ButtonLink name={'portfolio'} page={1}/>
        <Portfolio />
      </div>
      <div id="skills-link" className="links">
        <ButtonLink name={'skills'} page={2}/>
        <Skills />
      </div>
      <div id="about-link" className="links">
        <ButtonLink name={'about'} page={2}/>
        <About />
      </div>
    </Container>
    </ClientContext.Provider>
  );
}

export default App;
