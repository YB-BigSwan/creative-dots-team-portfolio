import "./MemberCarousel";
import MemberCarousel from "./MemberCarousel";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "../App.css";

function LandingPage() {
  return (
    <div className="App">
      <header>
        <Link to="/" className="logo-link">
          <Logo />
        </Link>
        <h2 className="tagline">Connecting the dots to success</h2>
      </header>
      <MemberCarousel />
    </div>
  );
}

export default LandingPage;
