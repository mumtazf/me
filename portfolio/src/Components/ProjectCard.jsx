import './ProjectCard.css'

const ProjectCard = () => {
    return (
        <div className="card">
            <div className='header'>
                <div className="title">
                    <h2>Experience Name</h2>
                </div>
                <div className="logo">
                    <img src="logo.png" alt="Company Logo" />
                </div>
        </div>
          <div className="details">
            <p>Location, Year</p>
          </div>
          <div className="technologies">
            <p>Technologies Used:</p>
          </div>
          <button className="more-info-btn">More Info</button>
        </div>
      );
    
}

export default ProjectCard;