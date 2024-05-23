import React from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const companies = [
  {
    label: 'Exotel',
    description: <ul>
        <li>Orchestrated collaborative efforts to comprehend and implement diverse chatbot use cases.</li>
        <li>Engineered and refined chatbot flows, elevating user experiences through strategic optimization.</li>
        <li>Innovatively integrated APIs with Python and JavaScript, enhancing chatbot functionalities.</li>
        <li>Applied expertise in developing tailored solutions for BFSI clients, meeting specific project needs.</li>
        <li>Implemented bespoke modifications in Django applications to align with client requirements.</li>
        <li> Streamlined interactions by integrating intricate APIs, fostering operational efficiency.</li>
        <li>Automated analytics report generation using Python scripts, facilitating seamless distribution via
 emails and  SFTP.</li>
        <li>Executed flawless deployment of Django apps on Ubuntu Server, employing Nginx and Gunicorn.</li>
        <li>Spearheaded contributions to GitHub workflows, ensuring meticulous version control and
 comprehensive documentation across UAT and PRODUCTION environments.</li>
        <li>Pioneered the creation of WhatsApp Webhooks through collaboration with 5+ vendors.</li>
        <li>Drove success in 5+ BFSI client projects, enhancing Django app functionality and discerning
 nuanced  applications of chatbot and LiveChat use cases</li>
        <li> Developed and implemented an innovative login widget, bolstering user authentication and
 access control, while introducing dynamic features using JavaScript</li>
        <li> Engineered a seamless bot-switching feature, enabling users to effortlessly transition between
 two distinct bots based on preferences, amplifying flexibility and customization options</li>
    </ul>,
  }
];


const CompanyTree = () => {
    return(
        <>  
            {companies.map((company, index) => (
            <div className="company-tree" key={index}>                
                        <div className="company-tree-label">
                            <img src={process.env.PUBLIC_URL + '/assets/icons/exotel.png'} height='40px' width='40px' />
                            <h3 className="gitfolio-underline">{company.label}</h3>
                        </div>
                        <div className="company-tree-description">
                            {company.description}
                        </div>
                    </div>
                ))}
        </>
    );
}



function WorkExperience(){
    return (<>
        <div className="work-experience-container" id="work-experience">
            <h3 className="gitfolio-underline section-heading text-2xl font-semibold text-gray-500 mt-2.5">Work Experience</h3> 
            <div className="work-experience-tree">
                <CompanyTree />
            </div>
        </div>  
    </>);
}

export default WorkExperience;