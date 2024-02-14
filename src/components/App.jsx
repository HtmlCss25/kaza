// App.js

import React from 'react';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Lodging from './pages/Lodging';
import About from './pages/About';
import NotFound from './pages/NotFound';

import Header from './organism/Header';

import '../style.scss';

const App = () => {
  return (
    <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/lodging" element={<Lodging/>} />
          <Route path="/about" element={<About/>} />
          <Route element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
