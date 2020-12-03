import React from "react";
import "./content.css";

const Content = () => {
    const main = (
        <div class="landing-box">
            <div class="name">
                <p>Julian Jackson</p>
            </div>
            <div class="sub-title">
                <p>
                    Software Engineer
                </p>
            </div>
            <div class="skip-button-container">
                <a class="skip-button" href="#projects">Continue...</a>
            </div>
        </div>
    );

    return (
        <main className="content">
            {main}
        </main>
    );
};

export default Content;