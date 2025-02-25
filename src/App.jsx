import React from 'react'
import './App.css'
import Header from './assets/components/Header.jsx';
import {Outlet} from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';

function App() {

  return (
    <div>
      <Header/>
      <div style={{marginTop: '4rem'}}>
          <ScrollToTop/>
          <Outlet/>
        </div>
    </div>
  )
}

export default App
