import React from "react";
import "./footer.css";

const Navbar = () => {
    const main = (
        <div class="footer-section">
            <p class="black-text">Copyright © Julian Jackson 2020</p>
            <p class="black-text">ABN: 55600392662</p>

        </div>
    );

    return (
        <main className="content">
            {main}
        </main>
    );
};

export default Navbar;