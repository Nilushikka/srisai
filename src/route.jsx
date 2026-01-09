
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

// We'll add the Blog page import later when we create it
import Blog from './pages/blog';
import About from './pages/about';
import Careers from './pages/careers';
import Stories from './pages/stories';
import ServicesPage from './pages/services/index.jsx';
import ShowCases from './pages/showcases/index.jsx';
import ContactUs from './pages/contact/index.jsx';
import AIAssistant from './components/common/ai-assistant';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/showcases" element={<ShowCases />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
            <AIAssistant />
        </Router>
    );
};

export default AppRoutes;
