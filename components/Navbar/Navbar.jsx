import { Fragment, useEffect, useState } from "react";
import { Transition,Popover } from '@headlessui/react';
import { Li } from "./NavbarStyle";

const Navbar = () => {
    
    useEffect(() => {
        window.addEventListener("scroll", resizeHeaderOnScroll);
    },[])

    // Function used to shrink nav bar removing paddings and adding black background to the navBar
    const resizeHeaderOnScroll =() =>{
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 350,
          headerEl = document.getElementById("navBar");
    
        if (distanceY > shrinkOn) {
          headerEl.classList.add("affix", "sticky", "top-0", "z-50");
        } else {
          headerEl.classList.remove("affix", "sticky", "top-0", "z-50");
        }
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return ( <>
        <nav id="navBar" className="nav">
            <div className="logo">
                <img src="assets/icons/developper-icon.png" alt="Logo Image" className="shadowfilter"/>
            </div>
            
            <div id="mainListDiv" className={`main_list fade-in ${isOpen ? "open_list ": " show_list"} `}>    
                <ul className="navlinks text-xl lg:text-2xl">
                    <li onClick={toggle}><a  href="#Home" className="">Home</a></li>
                    <li onClick={toggle}><a  href="#Studies">Studies</a></li>
                    <li onClick={toggle}><a  href="#Projects">Projects</a></li>
                    <li onClick={toggle}><a  href="#Experiences">Experiences</a></li>
                    <li onClick={toggle}><a  href="#Contact">Contact</a></li>
                    {/* <Li onClick={toggle}><a  href="#Contact">Contact</a></Li> */}
                </ul>
            </div>
            <span className={`navTrigger ${!isOpen ? "": "active"} mt-8`} onClick={toggle}>
                <i></i>
                <i></i>
                <i></i>
            </span>
        </nav>
    </>
    );
}
 
export default Navbar;