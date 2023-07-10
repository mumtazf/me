import ProjectCard from "./ProjectCard";
import {useState} from 'react'

const Experience = () =>{
    const [visibleProjects, setVisibleProjects] = useState(4);

    const handleClick = () => {
        const totalProjects = experienceData.length;

        setVisibleProjects(prevState => {
            const newVisibleProjects = prevState + 4;
            return newVisibleProjects <= totalProjects ? newVisibleProjects : totalProjects;
        });
    };


    const experienceData = [
        {
            id: 1,
            experience: "",
            companyName : "Mastercard",
            location: "",
            year: "",
            logo: "",
            technologies: "",
            moreInfo: ["hi","",""]
        },

        {
            id: 2,
            experience: "",
            companyName : "MIT",
            location: "Cambridge, MA",
            year: "June 2022 - May 2023",
            logo: "",
            technologies: "",
            moreInfo: ["","",""]
        },

        {
            id: 3,
            experience: "",
            companyName : "MIT-IBM Watson AI Lab",
            location: "",
            year: "",
            logo: "",
            technologies: "",
            moreInfo: ["","",""]
        },

        {
            id: 4,
            experience: "",
            companyName : "Google",
            location: "",
            year: "",
            logo: "",
            technologies: "",
            moreInfo: ["","",""]
        }, 

        {
            id: 5,
            experience: "",
            companyName : "Google",
            location: "",
            year: "",
            logo: "",
            technologies: "",
            moreInfo: ["","",""]
        }

    ]
    
    const projectsToShow = experienceData.slice(0,visibleProjects);
    return(
        <div className="experience">
            <div className="experience_box">
                <h2>Experience</h2>
            </div>
            <div className="experience_cards">
                {projectsToShow.map(project => 
                    <ProjectCard key = {project.id} project = {project}/>
                )}

            {visibleProjects < experienceData.length && (
            <button className="loadMore" onClick={handleClick}>Load More</button>
            )}
            </div>
        </div>
    )
}

export default Experience;