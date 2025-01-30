import './App.css'
import Contact from './Components/Contact/Contact';
// import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Intro from './Components/intro/Intro'
import Navbar from './Components/Navbar/Navbar';
import Achievements from './Components/Achievements/Achievements';
import Services from './Components/Services/Services';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import {themeContext} from './Context/Context';
import {useContext} from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" 
    style={
      {
        backgroundColor: darkMode ? 'black' : '',
        color: darkMode ? 'white': ''
      }
    }>
      <Navbar />  
      <Intro /> 
      <Services /> 
      {/* <Experience />    */}
      <Skills />
      <Projects />
      <Achievements />  
      <Contact />
      <Footer />
    </div>
  )
}

export default App
