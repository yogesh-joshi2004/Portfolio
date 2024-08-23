import React from 'react';
import Navbar from './components/navbar/navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Board from './components/board/board';
const App = () => {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Contact/>
    <Footer/>
    <Board/>
    </div>
  );
}

export default App;
