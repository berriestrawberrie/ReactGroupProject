
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from "./LoginForm";
import Game from "./pages/Game";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/LoginForm" element={<LoginForm/>}/>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />}/>
        <Route path="/Game" element={<Game />} />
      </Routes>
    </Router>
  );
}
  

export default App;
