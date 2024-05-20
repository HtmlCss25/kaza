// App.js

import React from 'react';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Lodging from './pages/Lodging';
import About from './pages/About';
import NotFound from './pages/NotFound';

import Header from './organism/Header';
import Footer from './organism/Footer';

import '../style.scss';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>

        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/lodging/:id" element={<Lodging/>} />
          <Route path="/about" element={<About/>} />
          
          <Route path="/notFound" element={<NotFound/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>

        <Footer/>
    </BrowserRouter>
  );
};

export default App;
