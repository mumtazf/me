import introImage from '/assets/bitmoji_hi.webp'

const Home = () =>{
    return(
        <div className="aboutMe">
            <div className = "about" id = "hi">
                <h2>Hi there!</h2>
                <p>Welcome to my little home on the internet.<br/> It’s a work-in-progress and continues to grow as I do.</p>
            </div>
            <div className='aboutImage'>
                <img src = {introImage} alt = "bitmoji saying hi"/>
            </div>
    
        </div>
    )
}

export default Home;