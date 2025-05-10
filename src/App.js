import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { Header } from './Components/Layout/Header';
import { Sidebar } from './Components/Layout/Sidebar';
import { Home } from './Components/Pages/Home';
import { InPay } from './Components/Pages/InPay';
import { Cricket } from './Components/Pages/Cricket';
import { Footer } from './Components/Layout/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <Sidebar></Sidebar>
          <div className="main-panel">
          <Header></Header>
            <div className="container main-section">
            
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/InPay" element={<InPay/>}/>
                <Route exact path="/Cricket" element={<Cricket/>}/>
              </Routes>
            
            </div>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
