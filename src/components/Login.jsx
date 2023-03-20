import React from "react";
import { useState } from "react";

export default function Login({setToken}) {
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

    async function loginUser(event) {
        event.preventDefault();
        console.log('username and password event', event.target[0].value, event.target[1].value)
        
        fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/users/login',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: event.target[0].value,
                    password: event.target[1].value
                }     
            })
        }).then(response => response.json())
          .then(result => {
            console.log(result);
          })

          .catch(console.error);
    }                
    return (
        <form id="login" onSubmit={(event) => loginUser(event)}>
           
            <input
              placeholder="Username"
              type="text"
              value={newUsername}
              onChange={(event) => setNewUsername(event.target[0])}
              ></input>
            
              <input
              placeholder="Password"
               type="password"
               value={newPassword}
               onChange={(event) => setNewPassword(event.target[1])}
              ></input>
            <button type="submit">Login Submit</button>
        </form>
    );
}

export {Login};