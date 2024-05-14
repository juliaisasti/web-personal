import { BrowserRouter } from 'react-router-dom';
import Home from './assets/components/pages/Home';
// import About from './assets/components/pages/About';
// import Projects from './assets/components/pages/Projects';
// import Contact from './assets/components/pages/Contact';

function App() {

  return (
    <>
      <BrowserRouter>
        <Home />
        {/* <About />
        <Projects />
        <Contact /> */}
      </BrowserRouter>
    </>
  )
}

export default App
