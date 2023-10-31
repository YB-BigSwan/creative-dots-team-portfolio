import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import TeamProject from "./components/TeamProject"; // Import the TeamProject component
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
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
