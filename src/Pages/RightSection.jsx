import "./rightsection.css";
import { FaCode } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TbUxCircle } from "react-icons/tb";
import { RiPresentationFill } from "react-icons/ri";

const RightSection = () => {
  return (
    <div>
      <div className="about-me">
        <div className="abt-line">
          <h2>About me</h2>
          <div className="about-hr-line"></div>
        </div>
        <p>
          Hello there! Im thrilled to welcome you to my portfolio. I am a
          passionate and versatile full-stack developer with a keen interest in
          exploring the latest cutting-edge technologies. My journey in the
          world of web development has been nothing short of exhilarating, and I
          constantly strive to enhance my skills and embrace emerging trends in
          the industry.
        </p>
      </div>
      <div className="skills">
        <h2>What I do!</h2>
        <div className="skills-items">
          <div className="skill-1 size color">
            <div className="logo-name">
              <FaCode
                style={{
                  color: "#E80505",
                  fontSize: "1.5rem",
                }}
              />
              <h4>Web Development</h4>
            </div>
            <p>
              As a developer, I find myself most captivated by the power and
              flexibility of NEXT.js. Im always eager to dive into new projects
              that leverage NEXT.js and discover innovative ways to create fast,
              scalable, and user-friendly applications.
            </p>
          </div>
          <div className="skill-2 size">
            <div className="logo-name">
              <FaInstagram
                style={{
                  color: "#FF9C1A",
                  fontSize: "1.5rem",
                }}
              />
              <h4>App Development</h4>
            </div>
            <p>
              With a focus on user-centric design and cutting-edge technologies,
              I thrive on building intuitive and efficient apps that make a
              positive impact on peoples lives. Lets turn ideas into reality and
              shape the future together.
            </p>
          </div>
          <div className="skill-3 size">
            <div className="logo-name">
              <TbUxCircle
                style={{
                  color: "#FF9C1A",
                  fontSize: "1.8rem",
                }}
              />
              <h4>UI/UX Designing</h4>
            </div>
            <p>
              Crafting visually appealing and intuitive user interfaces that
              offer a delightful user experience is something Im truly fanatic
              about.
            </p>
          </div>
          <div className="skill-4 size color">
            <div className="logo-name">
              <RiPresentationFill
                style={{
                  color: "#E80505",
                  fontSize: "2rem",
                }}
              />
              <h4>Mentorship</h4>
            </div>
            <p>
              I have also found great joy in sharing my knowledge with others.
              Being a technical mentor allows me to give back to the community
              that has supported me throughout my career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
