import { useContext } from "react";
import "./website.css";
import { CiDark } from "react-icons/ci";
import { StateContext } from "../store/AppState";
import Navbar from "./Navbar";
import LeftProfile from "./LeftProfile";
import RightSection from "./RightSection.jsx";
import Resume from "./Resume.jsx";
import { Route, Routes } from "react-router-dom";

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
          <Routes>
            <Route path="/" element={<LeftProfile />} />
            <Route path="/resume" element={<LeftProfile />} />
            <Route path="/work" element={<LeftProfile />} />
            <Route path="/contact" element={<LeftProfile />} />
          </Routes>
        </div>
        <div className="right-section">
          <Routes>
            <Route path="/" element={<RightSection />} />
            <Route path="/work" element={<Resume />} />
          </Routes>
        </div>
      </aside>
      <main></main>
    </div>
  );
};

export default Website;
