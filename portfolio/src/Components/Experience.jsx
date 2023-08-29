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
            experience: "SWE Intern @ Mastercard",
            companyName : "Mastercard",
            location: "",
            year: "June 2023 - August 2023",
            logo: '../assets/mastercard.webp',
            technologies: "Java, Spring, Spring Boot, Hadoop, AWS S3, Git",
            moreInfo: ["I worked with data pipelines and my projects were related to automating the extraction of datasets.","I worked with Hadoop and learned about how distributed file systems and parallel computing impacts the speed of ETL processes","I also worked with Java to develop a tool that reduced memory overhead for transferring datasets."]
        },

        {
            id: 2,
            experience: "Machine Learning Fellow @ MIT",
            companyName : "MIT",
            location: "Cambridge, MA",
            year: "June 2022 - May 2023",
            logo: '../assets/MIT_logo.webp',
            technologies: "Python, ML models - CLIP, XGBoost, Computer Vision, NLP (spaCy, NLTK, gensim), Feature engineering, Jupyter Notebook, Google Colab",
            moreInfo: ["","",""]
        },

        {
            id: 3,
            experience: "ML Engineering Contributor @ MIT-IBM Watson AI Lab",
            companyName : "MIT-IBM Watson AI Lab",
            location: "Cambridge, MA",
            year: "August 2022 - December 2022",
            logo: '../assets/mit_ibm.webp',
            technologies: "Computer Vision (CLIP model), Model Evaluation (accuracy, precision, recall, F1 score, top-K accuracy); gTTS, React Native",
            moreInfo: ["","",""]
        },

        {
            id: 4,
            experience: "Responsible AI Fellow @ Google",
            companyName : "Google",
            location: "Mountain View, CA (Remote)",
            year: "April 2022 - May 2022",
            logo: "../assets/google_logo.webp",
            technologies: "AI algorithms, Google Colab, ATS systems",
            moreInfo: ["","",""]
        }, 

        {
            id: 5,
            experience: "Web Dev Teaching Assistant @ Girls Who Code",
            companyName : "Girls Who Code",
            location: "New York City, New York (Remote)",
            year: "June 2022 - August 2022",
            logo: '../assets/GWC_logo.png',
            technologies: "JavaScript, HTML/CSS, Accessible Web Development, Git",
            moreInfo: ["","",""]
        }, 
        {
            id: 6,
            experience: "Student Researcher",
            companyName : "",
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

