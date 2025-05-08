import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from "./LoginForm";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/LoginForm" element={<LoginForm/>}/>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />}/>
        <Route path="/Game" element={<Game />} />
      </Routes>
    </Router>
  );
}
  

export default App;
