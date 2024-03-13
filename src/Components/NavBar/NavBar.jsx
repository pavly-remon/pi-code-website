import "./NavBar.css";
import {useState} from "react";

const NavBar = () => {
    const tabs = ["Work Experience", "Projects", "Education & Courses"]
    const [currTab, setCurrTab] = useState("Work Experience")
    return (
        <div className="mt-5 flex justify-center">
            <ul className="nav-bar mobile:w-[100%] tablet:w-[80%] laptop:w-[70%]">
                {
                    tabs.map((tab) =>
                        <li
                            className={"nav-bar-tab text-center h-8 tablet:h-10 laptop:h-12 mobile:text-[60%] tablet:text-[80%] laptop:text-lg " + (tab === currTab ? 'active' : '')}
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