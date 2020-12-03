import React from "react";
import "./navbar.css";

const Navbar = () => {
    const main = (
        <div class="navbox">
            <div class="nav-option">
                <a class="nav-option link option" href="https://github.com/julian-jackson">Github</a>
                <a class="nav-option link option" href="#projects">Projects</a>
            </div>
        </div>   
    );

    return (
        <main className="content">
            {main}
        </main>
    );
};

export default Navbar;