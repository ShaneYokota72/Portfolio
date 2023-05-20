import './App.css';

import StickyNav from './Components/StickyNav';
import Mainpage from './Components/Mainpage';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Timeline from './Components/Timeline';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <StickyNav />
      <Mainpage />
      <Aboutme />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </div>
  );
}

export default App;
