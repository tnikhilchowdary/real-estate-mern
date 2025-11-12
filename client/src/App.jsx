import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignOut from "./pages/SignOut.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignOut" element={<SignOut />} />
      <Route path="/About" element={<About />} />
    </Routes>
   </Router>
  )
}

export default App
