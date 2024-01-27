import {Fragment} from "react";
import "./ContactCard.css";
import Assets from "@/assets/assets.js";

const ContactCard = ({contactInfo}) => {

    const assets = Assets;
    return (
        <div className="relative flex justify-center">
            <div className="profile-container z-10">
                <img
                    className="rounded-full w-20 h-20 md:w-24 md:h-24 xl:w-40 xl:h-40 border-2 xl:border-4 border-amber-100 mb-3"
                    src={assets.ProfilePicture} alt="Profile Picture"/>

                <p className="name text-base md:text-2xl xl:text-4xl font-bold mb-2 text-amber-100">{contactInfo.name}</p>
                <p className="title text-base md:text-2xl xl:text-4xl font-bold text-blue-300">{contactInfo.title} | {contactInfo.company}</p>
                <div className="social-sites my-3">
                    <a href="https://github.com/pavly-remon/" target="_blank">
                        <img src={assets.GithubLogo}
                             className="rounded-full w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 mx-2"
                             alt="Github Logo"/></a>
                    <a href="https://www.linkedin.com/in/pavly-remon/" target="_blank">
                        <img src={assets.LinkedInLogo}
                             className="rounded-full w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 mx-2"
                             alt="LinkedIn Logo"/></a>
                </div>
            </div>
        </div>
    );
}


export default ContactCard;