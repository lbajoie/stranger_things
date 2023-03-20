import React from "react";
import { useState } from "react";

 function NewUserForm  ({token})  {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    
     fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/users/register',{
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
    .catch(console.error);
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
        <button type="submit">New User</button>
    </form>
   );
};

export {NewUserForm};
