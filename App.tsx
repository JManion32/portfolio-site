import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';
import Projects from './pages/projects';
import CookieCoder from './pages/projects/CookieCoder';
import SpeedRoulette from './pages/projects/speedroulette';
import Submitty from './pages/projects/submitty';
import SecureChatroom from './pages/projects/SecureChatroom';
import SuperStrikers from './pages/projects/SuperStrikers';
import PSoft from './pages/projects/psoft';
import Portfolio from './pages/projects/portfolio';
import Experience from './pages/experience';
import Resume from './pages/Resume';
import Rensselaer from './pages/experience/Rensselaer';
import HudsonValley from './pages/experience/HudsonValley';
import LambdaChi from './pages/experience/LambdaChi';
import PriceChopper from './pages/experience/PriceChopper';
import Stewarts from './pages/experience/Stewarts';
import Streamer from './pages/experience/Streamer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/CookieCoder" element={<CookieCoder />} />
        <Route path="/projects/speedroulette" element={<SpeedRoulette />} />
        <Route path="/projects/submitty" element={<Submitty />} />
        <Route path="/projects/securechatroom" element={<SecureChatroom />} />
        <Route path="/projects/superstrikers" element={<SuperStrikers />} />
        <Route path="/projects/psoft" element={<PSoft />} />
        <Route path="/projects/portfolio" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/experience/Rensselaer" element={<Rensselaer />} />
        <Route path="/experience/HudsonValley" element={<HudsonValley />} />
        <Route path="/experience/PriceChopper" element={<PriceChopper />} />
        <Route path="/experience/LambdaChi" element={<LambdaChi />} />
        <Route path="/experience/Stewarts" element={<Stewarts />} />
        <Route path="/experience/Streamer" element={<Streamer />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
