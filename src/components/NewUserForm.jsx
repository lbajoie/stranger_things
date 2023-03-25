import React from "react";
import { useState } from "react";
import { BASE_URL } from "../API";

 function NewUserForm  ({token})  {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
     fetch(`${BASE_URL}users/register`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: event.target[0].value,
        password: event.target[1].value
      }
    })
    }).then(resp => resp.json())
      .then(result => {
      console.log(result);
    })
    
    .catch(error => {
      alert(error)
      
         
        });
   }
   return(
    <form id="newUser" onSubmit={(event) => handleSubmit(event)}>
             <input type="text" placeholder="username"
        value={username}
        onChange={(event) => setUsername(event.target[0])}
        ></input>
          <input type="password"
          vaule={password} placeholder="password"
          onChange={(event) => setPassword(event.target[1])}
          ></input>
        <button type="submit" className="submit-btn" >New User</button>
    </form>
   );
};

export {NewUserForm};
