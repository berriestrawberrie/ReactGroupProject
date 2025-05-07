import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from "./LoginForm";
import Signup from "./pages/Signup";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/" element={<Signup />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </Router>
  );
}
  

export default App;
