import "./leftprofile.css";
import profile from "../assets/linkedin-profile.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";

const profileDetail = [
  {
    id: 1,
    image: profile,
    name: "Umar Shakoor",
    title: "FullStack Developer",
    phone: "+923184436794",
    email: "umar@xpro.com",
    location: "Lahore, Pakistan",
    logos: [
      {
        facebook: <FaFacebookF />,
        linkedin: <FaLinkedinIn />,
        twitter: <FaTwitter />,
        github: <FaGithub />,
      },
      {
        phone: (
          <IoIosPhonePortrait style={{ color: "#EC1C09", fontSize: "20px" }} />
        ),
        email: (
          <MdOutlineEmail style={{ color: "#FF9A1A", fontSize: "20px" }} />
        ),
        location: (
          <CiLocationOn style={{ color: "#EC1C09", fontSize: "20px" }} />
        ),
        download: (
          <MdOutlineFileDownload style={{ color: "#fff", fontSize: "20px" }} />
        ),
      },
    ],
  },
];

const LeftProfile = () => {
  return (
    <div className="div-wrapper">
      <div className="card-wrapper">
        <img className="card-img" src={profileDetail[0].image} alt="profile" />
        <div className="info-wrapper">
          <h3 className="card-main-name">{profileDetail[0].name}</h3>
          <h4 className="card-profile-title">{profileDetail[0].title}</h4>
        </div>
        <div className="social-logo-wrapper">
          <div className="social-logo fb">
            {profileDetail[0].logos[0].facebook}
          </div>
          <div className="social-logo ln">
            {profileDetail[0].logos[0].linkedin}
          </div>
          <div className="social-logo tw">
            {profileDetail[0].logos[0].twitter}
          </div>
          <div className="social-logo gh">
            {profileDetail[0].logos[0].github}
          </div>
        </div>
        <div className="card-contact-wrapper">
          <div className="card-contact">
            {profileDetail[0].logos[1].phone}
            <div className="direc-column">
              <p className="contact-head">Phone</p>
              {profileDetail[0].phone}
            </div>
          </div>
          <hr className="line" />
          <div className="card-contact">
            {profileDetail[0].logos[1].email}
            <div className="direc-column">
              <p className="contact-head">Email</p>
              {profileDetail[0].email}
            </div>
          </div>
          <hr className="line" />
          <div className="card-contact">
            {profileDetail[0].logos[1].location}
            <div className="direc-column">
              <p className="contact-head">Location</p>
              {profileDetail[0].location}
            </div>
          </div>
          <hr className="line" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button className="download-btn">
              {profileDetail[0].logos[1].download}
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftProfile;
