import "./ContactCard.css";
import Assets from "@/assets/assets.js";
import PropTypes from "prop-types";

const ContactCard = ({ contactInfo }) => {
  const assets = Assets;
  
  return (
    <div className="contact-card relative flex justify-center">
      <div className="profile-container z-10">
        <img
          className="profile-pic rounded-full w-16 h-16 tablet:w-24 tablet:h-24 laptop:w-40 laptop:h-40 border-2 laptop:border-4 border-amber-100 mb-3"
          src={assets.ProfilePicture}
          alt="Profile Picture"
        />

        <p className="name text-2xl tablet:text-4xl laptop:text-5xl font-black mb-1 text-amber-100">
          {contactInfo.name}
        </p>
        <p className="title text-lg tablet:text-2xl laptop:text-4xl font-medium text-blue-300">
          <span className="font-light">{contactInfo.title}</span> |{" "}
          {contactInfo.company}
        </p>
        <div className="social-sites mobile:my-1 my-3">
          <a
            href="https://github.com/pavly-remon/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={assets.GithubLogo}
              className="rounded-full w-8 h-8 tablet:w-10 tablet:h-10 laptop:w-12 laptop:h-12 mx-2"
              alt="Github Logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/pavly-remon/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={assets.LinkedInLogo}
              className="rounded-full w-8 h-8 tablet:w-10 tablet:h-10 laptop:w-12 laptop:h-12 mx-2"
              alt="LinkedIn Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  contactInfo: PropTypes.object,
};
export default ContactCard;
