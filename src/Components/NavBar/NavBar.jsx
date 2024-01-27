import "./NavBar.css";
import {useState} from "react";

const NavBar = () => {
    const tabs = ["Work Experience", "Projects", "Education & Courses"]
    const [currTab, setCurrTab] = useState("Work Experience")
    return (
        <div className="mt-5 flex justify-center">
            <ul className="nav-bar w-[100%] xl:w-[70%]">
                {
                    tabs.map((tab) =>
                        <li
                            className={"nav-bar-tab text-center h-8 md:h-10 xl:h-12 text-xs md:text-base xl:text-lg " + (tab === currTab ? 'active' : '')}
                            onClick={() => setCurrTab(tab)} key={tab}>
                            {tab}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default NavBar;