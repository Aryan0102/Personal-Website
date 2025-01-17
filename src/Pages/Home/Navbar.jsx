import React from "react";
import { useState, useEffect} from "react"
import { Link } from "react-scroll"

function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const toggleNav = () => setNavActive(!navActive)
    const closeMenu = () => setNavActive(false)

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    }, []);

    useEffect(() => {
        if(window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className = {`navbar ${navActive ? "active": ""}`}>
            <div className="navbar--logo--container">
                <img src = "logo.svg" alt = "Aryan Gupta" style={{height: "100%", aspectRatio: "1" / "1"}}/>
            </div>

            <a className = {`nav__hamburger ${navActive ? "active" : ""}`} onClick = {toggleNav} >
                <span className = "nav__hamburger__line"></span>
                <span className = "nav__hamburger__line"></span>
                <span className = "nav__hamburger__line"></span>
            </a>

            <div className = {`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link 
                            onClick = {closeMenu}
                            activeClass = "navbar--active-content"
                            spy = {true}
                            smooth = {true}
                            offset = {-220}
                            duration = {500}
                            to = "mainSection"
                            className="navbar--content">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link 
                            onClick = {closeMenu}
                            activeClass = "navbar--active-content"
                            spy = {true}
                            smooth = {true}
                            offset = {-100}
                            duration = {500}
                            to = "mySkills"
                            className="navbar--content">
                            My Expertise
                        </Link>
                    </li>

                    <li>
                        <Link 
                            onClick = {closeMenu}
                            activeClass = "navbar--active-content"
                            spy = {true}
                            smooth = {true}
                            offset = {-130}
                            duration = {500}
                            to = "AboutMe"
                            className="navbar--content">
                            About Me
                        </Link>
                    </li>

                    <li>
                        <Link 
                            onClick = {closeMenu}
                            activeClass = "navbar--active-content"
                            spy = {true}
                            smooth = {true}
                            offset = {-50}
                            duration = {500}
                            to = "MyPortfolio"
                            className="navbar--content">
                            Portfolio
                        </Link>
                    </li>

                    <li>
                        <Link 
                            onClick = {closeMenu}
                            activeClass = "navbar--active-content"
                            spy = {true}
                            smooth = {true}
                            offset = {-90}
                            duration = {500}
                            to = "MyExperience"
                            className="navbar--content">
                            Experience
                        </Link>
                    </li>

                    <li>
                        <Link 
                            onClick = {closeMenu}
                            activeClass = "navbar--active-content"
                            spy = {true}
                            smooth = {true}
                            offset = {-50}
                            duration = {500}
                            to = "Research"
                            className="navbar--content">
                            Research
                        </Link>
                    </li>

                </ul>
            </div>
            <Link 
                onClick = {closeMenu}
                activeClass = "navbar--active-content"
                spy = {true}
                smooth = {true}
                offset = {-220}
                duration = {500}
                to = "Contact"
                className="btn btn-outline-primary contact-btn">
                Contact Me
            </Link>
        </nav>
    );
}

export default Navbar;