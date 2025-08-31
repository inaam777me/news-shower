import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Favorite from './pages/Favorite'; 
import About from './components/About';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <About />
    </>
  );
}

export default App;
