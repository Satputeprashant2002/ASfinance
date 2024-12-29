import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Calcular from './components/Cal';
import Ob from './components/Ourblogs';
import Contact from './components/Cont';
import Ploan from './components/Personloan';
import Hloan from './components/Homeloan';
import Bloan from './components/Businessloan';
import Insu  from './components/Insurance';
import Cloan from './components/Carloan';
import WhatsAppButton from './components/WhatsAppButton';


function App() {
    return (
        <Router>
            <ScrollToTop />
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="/cal" element={<Calcular/>}/>
                <Route path="/ob" element={<Ob/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/ploan"   element={<Ploan/>}/>
                <Route path="/hloan"   element={<Hloan/>}/>
                <Route path="/bloan"   element={<Bloan/>}/>
                <Route path="/insu"   element={<Insu/>}/>
                <Route path="/cloan"   element={<Cloan/>}/>
            </Routes>
           
            <Footer />
            <WhatsAppButton />
        </div>
    </Router> 
    );
}

export default App;
