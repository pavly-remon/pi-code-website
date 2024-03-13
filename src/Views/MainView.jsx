import { memo } from "react";
import ContactCard from "@/Components/ContactCard/ContactCard.jsx";
import NavBar from "@/Components/NavBar/NavBar.jsx";
import Timeline from "@/Components/Timeline/Timeline.jsx";

const MainView = memo(function MainView() {
  const contactInfo = {
    profilePic: "HW_img.jpg",
    name: "Pavly Remon",
    title: "Software Engineer",
    company: "Huawei",
  };
  return (
    <>
      <div className="contact-section drop-shadow-md">
        <ContactCard contactInfo={contactInfo} />
        <NavBar />
      </div>

      <div className="section drop-shadow-md">
        <Timeline />
      </div>
    </>
  );
});

export default MainView;
