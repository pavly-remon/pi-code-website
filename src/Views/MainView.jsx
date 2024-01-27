import ContactCard from "@/Components/ContactCard/ContactCard.jsx";
import NavBar from "@/Components/NavBar/NavBar.jsx";

const MainView = () => {
    const contactInfo = {
        profilePic: "HW_img.jpg",
        name: "Pavly Remon",
        title: "Software Engineer",
        company: "Huawei",
    }
    return (<>
        <div className="section drop-shadow-md">
            <ContactCard contactInfo={contactInfo}/>
            <NavBar/>
        </div>

        <div className="section drop-shadow-md">

        </div>
    </>);
}

export default MainView;
