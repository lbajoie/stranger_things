import React from "react";
import { useState } from "react";


export const Footer = () => {

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
        return (<form onSubmit={handleSubmit}>
            <div id="footer">
        <h3>
            Create a Post 
        </h3>
        
            <input type= "text" placeholder="title" value={title} onChange = {(event) => setTitle(event.target.value)}></input>
            <input type= "text" placeholder="description" value=
            {[body]} onChange={(event) => setDescription(event.target.value)}></input>
            <button type="submit" className="btn btn-outline-primary">Submit New Post</button>
            </div>
        </form>
       
        )
    } ;
    Create()
};      