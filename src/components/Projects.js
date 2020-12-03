import React from "react";
import "./projects.css";

import BluewaterPreview from "./../img/bluewater-preview.png";
import PaintbrushPreview from "./../img/paintbrush-preview.png";
import SandboxPreview from "./../img/sandbox-preview.png";
import PortfolioPreview from "./../img/portfolio-preview.png";

const Projects = () => {
    const main = (
        <div id="projects" class="standard-bg">
            <p class="black-header">Projects</p>
            <div class="tri-flex">
                <div class="project">
                    <p class="black-subheader">Physics Sandbox</p>
                    <img class="preview-image" src={SandboxPreview} width="320" height="240"></img>
                    <div class="wrap">
                        <p class="black-text wrap">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <a href="https://github.com/julian-jackson/sandbox">Github</a>
                </div>

                <div class="project">
                    <p class="black-subheader">Bluewater Deliveries Website</p>
                    <img class="preview-image" src={BluewaterPreview} width="320" height="240"></img>
                    <div class="wrap">
                        <p class="black-text wrap">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <a href="https://github.com/bluewaterdeliveries/bluewaterdeliveries.github.io">Github</a>
                </div>

                <div class="project">
                    <p class="black-subheader">Portfolio Website</p>
                    <img class="preview-image" src={PortfolioPreview} width="320" height="240"></img>
                    <div class="wrap">
                        <p class="black-text wrap">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <a href="https://github.com/julian-jackson/paintbrush">Github</a>
                </div>
            </div>
        </div>

    );

    return (
        <main className="content">
            {main}
        </main>
    );
};

export default Projects;