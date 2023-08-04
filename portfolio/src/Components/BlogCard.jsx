import './BlogCard.css'
import { useEffect, useState } from "react";

const BlogCard = (props) => {

    const handleClick = () => {
        const blogAddress = "https://mumtazfatima.hashnode.dev/"
        window.open(blogAddress+props.slug, "_blank");
    }

    useEffect(() => {
    })
    
    return(
        <div className="blogCard">
            <img src = {props.coverImage} alt = "cover image for blog post"/>
            <h2>{props.title}</h2>
            <p>{props.dateUploaded}</p>
            <p>{(props.brief).substring(0,180)}</p>
                <div class="center-container">
                    <button onClick={handleClick}>Read More</button>
                </div>
        </div>
    )

}

export default BlogCard;