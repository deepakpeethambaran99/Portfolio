import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dock(){
    return (
        <div className="dock-container">
            <a target="__blank" href="https://www.linkedin.com/in/deepak-k-pitmbaran-a33086187/" className="dock-item">
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
            </a>
            <a target="__blank" href="https://github.com/deepakpeethambaran99" className="dock-item">
                <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
        </div>
    );
}

export default Dock;