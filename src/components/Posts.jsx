import React, { useState, useEffect } from "react";



export const Posts = () => {
    const [posts, setPosts] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("");
  console.log('data: ', posts);
    useEffect(() => {
      const fetchPosts = async () => {
   
      const resp = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/posts/');
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
    posts.map(post => <div id="posts" key={post.id}>
      {post.title}, {post.price}, {post.description}, {post.id}
    </div>)
  }
  </>
  };
  
  