import React from 'react'
import './App.css'
import Header from './assets/components/Header.jsx';
import {Outlet} from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';
import Footer from './assets/components/Footer.jsx';

function App() {

  return (
    <div>
      <Header/>
      <div style={{marginTop: '4rem', height: '100%'}}>
        <ScrollToTop/>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
