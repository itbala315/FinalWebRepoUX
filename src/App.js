import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import FileUpload from "./FileUpload";
import HomePage from "./home";
import Success from "./Success"; // Import the Success component
import RecordsPage from "./RecordsPage";
import Footer from "./Footer";
import Header from "./Header";

import "./App.css";

function App() {
  // Define an array of routes where the header should be displayed
  const headerRoutes = ["/fileupload", "/home","/records","/success"];

  // Custom hook to determine whether to show the header
  const ShowHeader = () => {
    const location = useLocation();
    return headerRoutes.includes(location.pathname) ? (
      <div>
        <Header />
        {/* Add a div here after the Header */}
        <div className="header-separator"></div>
      </div>
    ) : null;
  };
  return (

    <Router>
     <ShowHeader />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login  />} />
          <Route path="/register" element={<Register />} />
          <Route path="/fileupload" element={<FileUpload />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/success" element={<Success />} /> {/* Route for success screen */}
          <Route path="/records" element={<RecordsPage />} />
        </Routes>
      </div>
   
    </Router>
  );
}

export default App;


