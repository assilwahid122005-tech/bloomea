import './App.css';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';
import Boxes from './pages/Boxes'
import { Routes, Route } from 'react-router-dom'
function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/boxes" element={<Boxes />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}
export default App;