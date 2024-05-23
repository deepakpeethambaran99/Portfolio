import React from "react";

const ProjectCard = (props) => {
    const thumbnails = props.thumbnail;
    return (
        <>
            <div className="project-card">
                <div className="blur-overlay" style={{backgroundImage:`url(${thumbnails})`}}></div>
                <div className="card-thumbnail" >
                    <img src={thumbnails} alt="" />
                </div>
                <div className="card-title">
                    <h3 className="gitfolio-underline text-lg">Title</h3>
                </div>
                <div className="card-body" >
                    {props.children}
                </div>
                <div className="card-footer"></div>
            </div>
        </>
    )
}


function ProjectSection(){
    return (
        <>
            <div className="project-container">
                <h3 className="gitfolio-underline section-heading text-2xl font-semibold text-gray-500 mt-2.5">Projects</h3>
                <div className="Projects">
                    <ProjectCard thumbnail={process.env.PUBLIC_URL+ "assets/img/django-preview.jpg"}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure mollitia, reprehenderit perferendis reiciendis culpa officiis ab quam? Ad quisquam praesentium incidunt est libero reprehenderit voluptate, nobis cupiditate voluptates ea pariatur.
                    </ProjectCard>
                    <ProjectCard thumbnail={process.env.PUBLIC_URL+ "assets/img/tech.png "}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure mollitia, reprehenderit perferendis reiciendis culpa officiis ab quam? Ad quisquam praesentium incidunt est libero reprehenderit voluptate, nobis cupiditate voluptates ea pariatur.
                    </ProjectCard>
                    <ProjectCard thumbnail={process.env.PUBLIC_URL+ "assets/img/health.jpg"}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure mollitia, reprehenderit perferendis reiciendis culpa officiis ab quam? Ad quisquam praesentium incidunt est libero reprehenderit voluptate, nobis cupiditate voluptates ea pariatur.
                    </ProjectCard>
                </div>
            </div>
        </>
    );
}

export default ProjectSection;