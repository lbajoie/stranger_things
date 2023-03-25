import React, { useState, useEffect } from "react";
import { BASE_URL } from "../API";
//import { Delete } from "./Delete";
//import { handleSubmit } from "./Update";
//import { Update } from "./Update";

export const Posts = ({token, name}) => {
    const [posts, setPosts] = useState([]);
    //const [userId, setUserId] = useState(null);
    //const [searchTerm, setSearchTerm] = useState("");
  //console.log('data: ', posts);
    useEffect(() => {
      const fetchPosts = async () => {
   
      const resp = await fetch(`${BASE_URL}posts/`);
      const data = await resp.json();
      setPosts(data.data.posts);
      //console.log('data: ', data.data.posts);
      
      }
      fetchPosts();
  }, [])
  // const fetchPosts = async () => {
   
  //   const resp = await fetch(`${BASE_URL}posts/`);
  //   const data = await resp.json();
  //   setPosts(data.data.posts);
  //   //console.log('data: ', data.data.posts);
    
    
  const handleDelete = async (postIdDelete) => {

    //var postIdDelete = event.target[0].value
    console.log('postIdToDelete: ', postIdDelete);
    const response = await fetch(`${BASE_URL}posts/${postIdDelete}`, {
    
            method: 'DELETE',
            headers: {
              'Content-type': 'Application/json',
              'Authorization': `Bearer ${token}`
             },
           
  });
  const data = await response.json(); 
  console.log('data ', data)
  posts.filter( post => post._id !== postIdDelete )
  setPosts(posts)

  return data
 

  }
  return <>
  <h1>
      Posts


  </h1>
  {
    posts.map(post =>
    
    <div id="posts" key={post._id}>
      <p><b><i>  Title:  </i></b>{post.title}</p>
      <p><b><i>  Description:  </i></b>{post.description}</p>
      <p><b><i>  Location:  </i></b>{post.location}</p>
      <p><b><i>  Price:   </i></b>{post.price}</p>
        <p><b><i>  Post Id:   </i></b>{post._id}</p>
      
       <button hidden={  name !== post.author.username} type="submit" className="submit-btn" onClick={(event) => handleDelete(post._id)} >Delete</button>
      {/* div> onSubmit= {Update} <button disable={'lbajoie' !== post.author.username} type="submit" className="submit-btn" >Upddate</button></form> */}
   
 
    </div>
    
)}
  
  </>
  };
  
  