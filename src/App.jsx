import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import CompanyPages from './routes/companyPages';
import {NavBar , Footer } from './components';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <TopBar /> */}
      <NavBar />
      <ScrollToTop>
        <Routes>{CompanyPages}</Routes>
      </ScrollToTop>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
