import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Projects from '../pages/projects';
import Experience from '../pages/experience';
import Blogs from '../pages/blogs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}

export default App;
