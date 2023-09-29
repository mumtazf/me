import laptopImage from '/assets/laptop_wave.webp'

const Intro = () => {

    return (
        <div className="intro">
            <div className="intro_box">
                <h2>About Me</h2>
                <div class = "intro_para">
                    <p>I’m a CS student with a focus in ML. As a part of my ML fellowship at MIT, <br/> I learned that I enjoy integrating ML models with products. <br/><br/>
    As a rising junior in college, I enjoy tinkering with different technologies. <br/> I realize that there is a breadth of knowledge out there so I keep myself open to learning new things.
                    I'm currently learning React and this website is a product of my learning journey.</p>
                    <img src = {laptopImage} alt = "girl in braids inside a laptop screen"/>
                </div>
        </div>
    </div>
    )
}
export default Intro;