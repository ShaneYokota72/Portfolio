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
      <h5 className="copyright">Copyright © Shane Yokota 2023</h5>
    </div>
  );
}

export default App;
