import React, { useState, useRef } from "react";
import './gitfolio.css';


import Home from "../components/gitfolio/Home";
import Content from "../components/gitfolio/Content";
import FooterSection from "../components/gitfolio/Footer";

function GitFolio(){

    const contentRef = useRef(null);

    const scroll = () => {
        console.log("outside");
        if (contentRef.current) {
            console.log("here!");
            contentRef.current.scrollIntoView({ behavior: 'smooth' });
            console.log("Here")
        }
    }

    const dark_mode = {
        background: "#0d1117"
    }

    const light_mode = {
        background: "#FFFFFF"
    }

    const [mode, setMode] = useState(dark_mode);

    return (
        <>
            <div id="gitfolio">
                <Home scrollFun={scroll}/>
                <Content ref={contentRef}/>
                <FooterSection />
            </div>
        </>
    );
}

export default GitFolio;
