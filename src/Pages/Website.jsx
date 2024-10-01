import { useContext } from "react";
import "./website.css";
import { CiDark } from "react-icons/ci";
import { StateContext } from "../store/AppState";
import Navbar from "./Navbar";
import LeftProfile from "./LeftProfile";
import RightSection from "./RightSection.jsx";

const Website = () => {
  const { mode, toggleMode } = useContext(StateContext);
  return (
    <div className={mode === "light" ? "mode-light" : "website"}>
      <header className={mode === "light" ? "dark" : "light"}>
        <h4 className="top-left-text">
          Umar <span>Shakoor</span>
        </h4>
        {mode === "light" ? (
          <CiDark onClick={toggleMode} className="moon-icon" />
        ) : (
          <CiDark onClick={toggleMode} className="dark-icon" />
        )}
      </header>
      <nav>
        <Navbar />
      </nav>
      <aside className="left-right">
        <div className="left-profile-card">
          <LeftProfile />
        </div>
        <div className="right-section">
          <RightSection />
        </div>
      </aside>
      <main></main>
    </div>
  );
};

export default Website;
