import React, { useState } from "react";
import { BASE_URL } from "../API";

const Update = ({ posts, setPosts, postId, setPostId }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('title,body ', title, body);
    console.log('postId:', postId);
    const response = await fetch(`${BASE_URL}posts/${postId}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
      })
    });
    const data = await response.json();
    console.log('data  ', data);
    if (data && data.title) {
      const newPosts = posts.map(post => {
        if (post.id === postId) {
          return data;
        } else {
          return post;
        }
      });
      setPosts(newPosts);
      setTitle('');
      setBody('');
      setPostId(null);
    }
  };

  return (
    <>
      <p>
        Update Posts
      </p>
      {
        posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))
      }
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
        <label htmlFor="body">Body:</label>
        <textarea id="body" value={body} onChange={e => setBody(e.target.value)}></textarea>
        <button type="submit">Update Post</button>
      </form>
    </>
  );
};

//export { Update };
