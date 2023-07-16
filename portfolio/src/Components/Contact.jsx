import contactImage from '../assets/good_one.webp'
import emailIcon from '../assets/email.png'
import linkedinIcon from '../assets/linkedin.png'
import githubIcon from '../assets/github_icon.webp'

const Contact = () =>{
    return(
        <div className="contact">
        <div className="contact_box">
            <h2>Contact</h2>
        </div>

        <div className="contact_cards">

            <div className='contact_info'>
                <div className='linkedin'>
                <a href="https://www.linkedin.com/in/mumtazf/">
                    <img src= {linkedinIcon} alt="LinkedIn contact"/>
                    </a>
                <p>Find me on <a href="https://www.linkedin.com/in/mumtazf/">LinkedIn  </a></p>
                </div>

                <div className='email'>
                <a href="mailto:mumtazsubscriptions@gmail.com">
                    <img src= {emailIcon} alt="Email contact"/>
                    </a>
                <p>Send me an <a href="mailto:mumtazsubscriptions@gmail.com"> email </a></p>
                </div>

                <div className='email'>
                <a href="www.github.com/mumtazf">
                    <img src= {githubIcon} alt="Github contact"/>
                    </a>
                <p>Find me on <a href="www.github.com/mumtazf"> Github </a></p>
                </div>

            </div>

        <img className ="contact_img" src = {contactImage} alt = "bitmoji saying new phone who dis?"/>
    </div>
    </div>
    )
}

export default Contact;