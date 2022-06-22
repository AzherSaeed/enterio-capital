import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import CompanyPages from './routes/companyPages';
import { TopBar , NavBar} from './components';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar/>
      {/* <Link to="/">Home</Link>
      <Link to="/team">Team</Link>
      <Link to="/project-structure">Project Structure</Link>
      <Link to="/what-sets-us-apart">What Sets Us Apart</Link> */}
      <Routes>{CompanyPages}</Routes>
    </BrowserRouter>
  );
}

export default App;
