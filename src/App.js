import './App.css';

import StickyNav from './Components/StickyNav';
import Mainpage from './Components/Mainpage';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';

function App() {
  return (
    <div>
      <StickyNav />
      <Mainpage />
      <Aboutme />
      <Skills />
    </div>
  );
}

export default App;
