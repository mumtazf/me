import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import axios from 'axios';
const API_URL = 'https://api.hashnode.com';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";
import BlogCard from './BlogCard'



const Blog = () =>{
    const [blogPost, setBlogPost] = useState([]);

    const BLOG_QUERY = `{
        user(username: "victoria") {
          publication {
            posts(page: 0) {
              title
              brief
              slug
              dateUpdated
              coverImage
            }
          }
        }
      }`;
   


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("API_KEY", API_KEY);

var graphql = JSON.stringify({
  query: "{\r\n  user(username: \"mumtazfatima\") {\r\n    publication {\r\n      posts(page: 0) {\r\n        title\r\n        brief\r\n        slug\r\n        dateUpdated\r\n        coverImage\r\n      }\r\n    }\r\n  }\r\n}",
  variables: {}
})
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
  redirect: 'follow'
};



    useEffect(()=> {
        const getBlogPosts = async () => {
            const response = await fetch("https://api.hashnode.com/", requestOptions);

            const result = await response.json();

           setBlogPost(result.data.user.publication.posts);
        }
        getBlogPosts();

       
    },[])


     
    return(
    <div className="blog">
        <div className="blog_box">
            <h2>Blog</h2>
        </div>

        <div className="blog_cards">
          <div className="blog_grid">
            {blogPost ? 
                blogPost.map((blog) => 
                <BlogCard title = {blog.title}
                            brief = {blog.brief}
                            slug = {blog.slug}
                            dateUpdated = {blog.dateUpdated}
                            coverImage = {blog.coverImage}/> 
                ) 
            : null}
            </div>
        </div>
    </div>
    )
}

export default Blog;