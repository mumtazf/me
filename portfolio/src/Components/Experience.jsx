import ProjectCard from "./ProjectCard";
import {useState} from 'react'

import {GOOGLE_LOGO} from "../assets/google_logo.webp";
import {MIT_LOGO} from "../assets/MIT_logo.webp";
import {MASTERCARD_LOGO} from "../assets/mastercard.webp";
import {MIT_IBM_LOGO} from "../assets/mit_ibm.webp";

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
            experience: "SWE Intern",
            companyName : "Mastercard",
            location: "",
            year: "2023",
            logo: MASTERCARD_LOGO,
            technologies: "Java, Spring, Spring Boot, Hadoop, AWS S3, Git",
            moreInfo: ["","",""]
        },

        {
            id: 2,
            experience: "Machine Learning Fellow @ MIT",
            companyName : "MIT",
            location: "Cambridge, MA",
            year: "June 2022 - May 2023",
            logo: MIT_LOGO,
            technologies: "Python, ML models - CLIP, XGBoost, Computer Vision, NLP (spaCy, NLTK, gensim), Feature engineering, Jupyter Notebook, Google Colab",
            moreInfo: ["","",""]
        },

        {
            id: 3,
            experience: "ML Engineering Contributor",
            companyName : "MIT-IBM Watson AI Lab",
            location: "Cambridge, MA",
            year: "August 2022 - December 2022",
            logo: MIT_IBM_LOGO,
            technologies: "Computer Vision (CLIP model), Model Evaluation (accuracy, precision, recall, F1 score, top-K accuracy); gTTS, React Native",
            moreInfo: ["","",""]
        },

        {
            id: 4,
            experience: "Responsible AI Fellow @ Google",
            companyName : "Google",
            location: "Mountain View, CA (Remote)",
            year: "April 2022 - May 2022",
            logo: GOOGLE_LOGO,
            technologies: "AI algorithms, Google Colab, ATS systems",
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

