import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation(){
    return <>
        <div className="gitfolio-nav">
            <div id="gitfolio-logo">
                <h1 style={{ fontSize: '1.5em' }}>Deepak K Pitmbaran</h1>
            </div>
            <div id="gitfolio-nav-items">
                <ul>
                    {/* <li>Home</li>
                    <li>About Me</li>
                    <li>Projects</li> */}
                </ul>
            </div>

            <div id="gitfolio-nav-btn">
                Resume <FontAwesomeIcon className="icon" icon="download" style={{ fontSize: '0.75em' }} />
            </div>
        </div>
    </>
}

export default Navigation;