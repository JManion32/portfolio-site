import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Projects from './pages/projects';
import CookieCoder from './pages/projects/CookieCoder';
import SpeedRoulette from './pages/projects/SpeedRoulette';
import Submitty from './pages/projects/Submitty';
import CChat from './pages/projects/CChat';
import SuperStrikers from './pages/projects/SuperStrikers';
import PSoft from './pages/projects/PSoft';
import Portfolio from './pages/projects/Portfolio';
import Experience from './pages/Experience';
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
        <Route path="/projects/cookiecoder" element={<CookieCoder />} />
        <Route path="/projects/speedroulette" element={<SpeedRoulette />} />
        <Route path="/projects/submitty" element={<Submitty />} />
        <Route path="/projects/cchat" element={<CChat />} />
        <Route path="/projects/superstrikers" element={<SuperStrikers />} />
        <Route path="/projects/psoft" element={<PSoft />} />
        <Route path="/projects/portfolio" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/experience/rensselaer" element={<Rensselaer />} />
        <Route path="/experience/hudsonvalley" element={<HudsonValley />} />
        <Route path="/experience/pricechopper" element={<PriceChopper />} />
        <Route path="/experience/lambdachi" element={<LambdaChi />} />
        <Route path="/experience/stewarts" element={<Stewarts />} />
        <Route path="/experience/streamer" element={<Streamer />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
