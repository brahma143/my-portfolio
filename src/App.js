//import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Works from './Components/Works';




function App() {
  return (
  <div>
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Works/>
     <Contact/>
  </div>

  );
}

export default App;
