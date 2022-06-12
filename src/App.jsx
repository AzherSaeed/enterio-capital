import React from "react";
import { BrowserRouter, Link, Routes } from "react-router-dom";
import CompanyPages from "./routes/companyPages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/team">Team</Link>
        <Link to="/project-structure">Project Structure</Link>
        <Link to="/what-sets-us-apart">What Sets Us Apart</Link>
        <Routes>{CompanyPages}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
