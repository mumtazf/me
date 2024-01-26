import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import axios from 'axios';
const API_URL = 'https://api.hashnode.com';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";
import BlogCard from './BlogCard'



const Blog = () =>{

    
    const [blogPost, setBlogPost] = useState([]);

    const [visiblePosts, setvisiblePosts] = useState(4);

    const handleClick = () => {
        const totalPosts = blogPost.length;

        setvisiblePosts(prevState => {
            const newVisiblePosts = prevState + 4;
            return newVisiblePosts <= totalPosts ? newVisiblePosts : totalPosts;
        });
    };

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
query: "{\r\n  publication(host: \"mumtazfatima.hashnode.dev/\") {\r\n    posts(first: 5) {\r\n      edges {\r\n        node {\r\n          title\r\n          brief\r\n          slug\r\n          publishedAt\r\n          coverImage {\r\n            url\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",
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
            const response = await fetch("https://gql.hashnode.com/", requestOptions);

            const result = await response.json();
            console.log(result.data.publication.posts.edges);
           setBlogPost(result.data.publication.posts.edges);
        }
        getBlogPosts();

       
    },[])


    const blogPostsToShow = blogPost.slice(0,visiblePosts);

    return(
    <div className="blog">
        <div className="blog_box">
            <h2>Blog</h2>
        </div>

        <div className="blog_cards">
          <div className="blog_grid">
            {blogPostsToShow ? 
                blogPostsToShow.map((blog) => 
                <BlogCard title = {blog.node.title}
                            brief = {blog.node.brief}
                            slug = {blog.node.slug}
                            dateUpdated = {blog.node.publishedAt}
                            coverImage = {blog.node.coverImage.url}/> 
                ) 
            : null}
            <div>
            {visiblePosts < blogPost.length && (
              <button className="loadMore" onClick={handleClick}>Load More</button>
            )}
            </div>
          </div>
        </div>
    </div>
    )
}

export default Blog;