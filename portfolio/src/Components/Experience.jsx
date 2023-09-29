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
            moreInfo: ["This was a year-long fellowship that was organized by the Break Through Tech Foundation at MIT","Through this fellowship, I got hands-on experience with supervised and unsupervised ML models","I worked on 2 industry-led projects related to computer vision and recommendation systems. My first project was with the MIT-IBM Watson AI Lab where I built a mobile app that integrated CLIP model to provide real-time image to audio conversion. This app was centered around social good and its usecase was directed towards individuals with vision disabilities."]
        },

        {
            id: 3,
            experience: "CS Research Mentorship Fellow",
            companyName : "Google",
            location: "",
            year: "February 2023 - May 2023",
            logo: '../assets/google_logo.webp',
            technologies: "CS Research, ML models, Career Development",
            moreInfo: ["This program is directed towards providing mentorship to students who are interested in CS Research", "Through this program, I learned what research responsibilities in the industry look like and the career trajectory of different researchers."]
        },

        {
            id: 4,
            experience: "ML Engineering Contributor @ MIT-IBM Watson AI Lab",
            companyName : "MIT-IBM Watson AI Lab",
            location: "Cambridge, MA",
            year: "August 2022 - December 2022",
            logo: '../assets/mit_ibm.webp',
            technologies: "Computer Vision (CLIP model), Model Evaluation (accuracy, precision, recall, F1 score, top-K accuracy); gTTS, React Native",
            moreInfo: ["","",""]
        },

        {
            id: 5,
            experience: "Responsible AI Fellow @ Google",
            companyName : "Google",
            location: "Mountain View, CA (Remote)",
            year: "April 2022 - May 2022",
            logo: "../assets/google_logo.webp",
            technologies: "AI algorithms, Google Colab, ATS systems",
            moreInfo: ["","",""]
        }, 

        {
            id: 6,
            experience: "Web Dev Teaching Assistant @ Girls Who Code",
            companyName : "Girls Who Code",
            location: "New York City, New York (Remote)",
            year: "June 2022 - August 2022",
            logo: '../assets/GWC_logo.png',
            technologies: "JavaScript, HTML/CSS, Accessible Web Development, Git",
            moreInfo: ["","",""]
        }, 
        {
            id: 7,
            experience: "Student Researcher",
            companyName : "",
            location: "",
            year: "May 2022 - Present",
            logo: "",
            technologies: "Python, APIs, Data scraping, NLP, Gensim, sentiment analysis",
            moreInfo: ["I worked on a research project related to social media post recommendations and users' exploration of opposing viewpoints.","",""]
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

