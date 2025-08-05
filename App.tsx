import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';
import Projects from './pages/projects';
import SpeedRoulette from './pages/projects/speedroulette';
import Submitty from './pages/projects/submitty';
import PSoft from './pages/projects/psoft';
import Portfolio from './pages/projects/portfolio';
import Experience from './pages/experience';
import Blogs from './pages/blogs';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/speedroulette" element={<SpeedRoulette />} />
        <Route path="/projects/submitty" element={<Submitty />} />
        <Route path="/projects/psoft" element={<PSoft />} />
        <Route path="/projects/portfolio" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
}

export default App;
