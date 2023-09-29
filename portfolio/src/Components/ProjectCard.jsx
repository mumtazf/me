import './ProjectCard.css'
import {useState, useEffect} from 'react'

const ProjectCard = ({project}) => {

    
    const [isExpanded, setIsExpanded] = useState(false);
    
    const handleExpand = () => {
        setIsExpanded(true);
      };

      const handleEscapeKeyPress = (event) => {
        if (event.keyCode === 27) { // Escape key code
          setIsExpanded(false);
        }
      };
      
      const handleCloseClick = () => {
        setIsExpanded(false);
      };
      
      useEffect(() => {
        document.addEventListener("keydown", handleEscapeKeyPress);
        return () => {
          document.removeEventListener("keydown", handleEscapeKeyPress);
        };
      }, []);
      
    return (
        <div className="card">
            <div className='header'>
                <div className="title">
                    <h2>{project.experience}</h2>
                </div>
                <div className="logo">
                    <img src={project.logo} alt="Company Logo" />
                </div>
        </div>

          <div className="details">
            <p>{project.year}</p>
            <p>{project.location}</p>
          </div>

          <div className="technologies">
            <p><b>Technologies Used: </b> {project.technologies}</p>
          </div>

          <div class = "button-container">
            <button className="more-info-btn" onClick={handleExpand}>More Info</button>
          </div>

        {isExpanded && (
            <div className="expanded-card-container">
                <div className = "more-info-card">
                  {project.moreInfo.map(point => 
                    <li>{point}</li>
                )}
                <button className="close-button" onClick={handleCloseClick}>Close</button>
                </div>
            </div>
        )}

        </div>
      );
    
}

export default ProjectCard;