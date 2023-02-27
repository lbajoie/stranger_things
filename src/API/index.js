import React, { useState, useEffect } from "react";



          
          export const Posts = () => {
            const [posts, setPosts] = useState([]);
            // const [searchTerm, setSearchTerm] = useState("");
          console.log('data: ', posts);
            useEffect(() => {
              const fetchPosts = async () => {
           
              const resp = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/posts/');
              const data = await resp.json();
              console.log('data: ', data.data.posts);
              setPosts(data.data.posts);
              }
              fetchPosts();
          }, [])
          
          return <>
          <h1>
              Posts1
          </h1>
          {
            posts.map(post => <div id="posts" key={post.id}>
              {post.title}, {post.price}
            </div>)
          }
          </>
          };
          
          


          

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setDescription] = useState('');

    const handleSubmit = async (event)  => {
        event.preventDefault();
        console.log('title, body: ', title, body);
        const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/posts', {
           method: 'POST',
           headers: {
            'Content-type': 'Application/json'
           },
           body: JSON.stringify({
            title,
            body
           })
        })
        const data = response.json();
        console.log('data: ',data)
    }
    return <>
    <h3>
        Create a Post 
    </h3>
    <form onSubmit={handleSubmit}>
        <input type= "text" placeholder="title" value={title} onChange = {(event) => setTitle(event.target.value)}></input>
        <input type= "text" placeholder="description" value=
        {[body]} onChange={(event) => setDescription(event.target.value)}></input>
        <button type="submit" className="btn btn-outline-primary">Submit</button>
    </form>
     
    </>
} ;

export { Create };
          
          
          