import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import TeamProject from "./components/TeamProject"; // Import the TeamProject component
import Storyboard from "./components/Storyboard";
import JourneyMapping from "./components/JourneyMapping";
import Prototype from "./components/Prototype";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <Router basename="/creative-dots-team-portfolio">
      <div>
        <NavBar />
        <Routes>
          <Route path="/members" element={<LandingPage />} />
          <Route path="/projects" element={<TeamProject />} />{" "}
          <Route path="/storyboard" element={<Storyboard />} />{" "}
          <Route path="/journeymapping" element={<JourneyMapping />} />{" "}
          <Route path="/prototype" element={<Prototype />} />{" "}
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
