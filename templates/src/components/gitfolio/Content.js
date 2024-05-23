import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import Skills from "./Skills";
import ProjectSection from "./ProjectSection";
import WorkExperience from "../WorkExperience";

const Content = React.forwardRef((props, ref) => {
    return (
        <>
            <div id="gitfolio-content" ref={ref}>
                {/* skills section */}
                <ScrollAnimation animateIn="fadeIn">
                    <Skills />
                </ScrollAnimation>
                
                {/* Work Experience */}
                
                <ScrollAnimation animateIn="fadeIn">
                    <WorkExperience title="Your Work Title"
    description="Description of your work experience..."/> 
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn">
                    <ProjectSection />
                </ScrollAnimation>
            </div>
        </>
    );
});

export default Content;