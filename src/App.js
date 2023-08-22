import './App.css';

import StickyNav from './Components/StickyNav';
import Mainpage from './Components/Mainpage';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Timeline from './Components/Timeline';
import Contact from './Components/Contact';
import SBProjectpopup from './Components/SBProjectpopup';
import SMProjectpopup from './Components/SMProjectpopup';
import Ecommerce from './Components/Ecommerce';
import StreamService from './Components/StreamService';
import NumberScan from './Components/NumberScan';
import Chromakey from './Components/ Chromakey';
import MazeSearch from './Components/MazeSearch';
import Taskclear from './Components/taskclear';

import { Routes, Route, Outlet } from 'react-router-dom';
import DevMesh from './Components/Devmesh';

function Home(){
  return(
    <div className='apppage'>
      <StickyNav />
      <Mainpage />
      <Aboutme />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/project:taskclear" element={<Taskclear />}></Route>
          <Route path="/project:SportsBettingHelper" element={<SBProjectpopup />}></Route>
          <Route path="/project:SocioMedia" element={<SMProjectpopup />}></Route>
          <Route path="/project:Ecommerce" element={<Ecommerce />}></Route>
          <Route path="/project:StreamingService" element={<StreamService />}></Route>
          <Route path="/project:NumberScan" element={<NumberScan />}></Route>
          <Route path="/project:Chromakey" element={<Chromakey />}></Route>
          <Route path="/project:Mazesearch" element={<MazeSearch />}></Route>
          <Route path="/project:devmesh" element={<DevMesh />}></Route>
        </Route>
      </Routes>
      
      <h5 className="copyright">Copyright © Shane Yokota 2023</h5>
    </div>
  );
}

export default App;
