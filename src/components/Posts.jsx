import React, { useState, useEffect } from "react";
import { BASE_URL } from "../API";


export const Posts = () => {
    const [posts, setPosts] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("");
  console.log('data: ', posts);
    useEffect(() => {
      const fetchPosts = async () => {
   
      const resp = await fetch(`${BASE_URL}posts/`);
      const data = await resp.json();
      setPosts(data.data.posts);
      console.log('data: ', data.data.posts);
      
      }
      fetchPosts();
  }, [])
  
  return <>
  <h1>
      Posts1
  </h1>
  {
    posts.map(post => <div id="posts" key={post._id}>
      <p><b><i>Title:  </i></b>{post.title}</p>
      <p><b><i>Description:  </i></b>{post.description}</p>
      <p><b><i>Location:  </i></b>{post.location}</p>
      <p><b><i>Price:   </i></b>{post.price}</p>
        <p><b><i>Post Id:   </i></b>{post._id}</p>
       
     
    </div>)
  }
  </>
  };
  
  