import React, { useState } from "react";
import { BASE_URL } from "../API";


const Create = ({token}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
   
    const handleSubmit = async (event)  => {
        event.preventDefault();
        console.log('title, body: ', title);
        const response = await fetch(`${BASE_URL}posts`, {
           method: 'POST',
           headers: {
            'Content-type': 'Application/json',
            'Authorization': `Bearer ${token}`
           },
           
            body: JSON.stringify({
              post: {
                title: title, 
                description: description,
                price: price,
                location: location,
                willDeliver: willDeliver
              }

           })
        }, []);
        const data = await response.json();
        //console.log('data: ', data.user.post)
    }
    return <>
  

    <form id="newpost" onSubmit={handleSubmit}>
  <h3>
        Create a Post 
    </h3>

        <input type= "text"  id="pfTitle" name="pfTitle" placeholder="title"  value={title} required onChange = {(event) => 
          setTitle(event.target.value)}></input>
        <input type= "text" placeholder="description" value=
        {description} onChange={(event) => setDescription(event.target.value)}></input>
        <input type= "text" placeholder="location" value= 
        {location} onChange={(event) => setLocation(event.target.value) }></input>
        <input type="var" placeholder="price" value=
        {price} onChange={(event) => setPrice(event.target.value)}></input>
        <input type="checkbox" id="postDeliver" value={willDeliver} onChange={(event) => setWillDeliver(event.target.checked)}></input> <span className="checkboxText">
          Willing to Deliver ???
        </span>
        
        <button type="submit" className="btn btn-outline-primary submit-btn">Submit New Post</button>
    </form>
     
    </>
} ;

export { Create };
          