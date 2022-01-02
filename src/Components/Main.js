// import { Link } from "react-router-dom";
import EmailIcon from "/Users/vickpro/react-business-card/src/Images/mail-2569.svg";
import LinkedInIcon from "/Users/vickpro/react-business-card/src/Images/linkedin-logo.svg";

export default function Main() {
  return (
    <main>
      <div>
        <h1>Vikas Jyani</h1>
        <h3>Frontend Developer</h3>
        <small>
          <a href="https://developervick.netlify.app/" />
        </small>
        <div className="btns">
          <button className="email-btn">
            <img className="email-icn" src={EmailIcon} />
            Email
          </button>
          <button className="linkedin-btn">
            <img className="linkedin-icn src={LinkedInIcon}" />
            LinkedIn
          </button>
        </div>
      </div>
    </main>
  );
}
