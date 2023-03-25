import React from "react";
import { useState } from "react";
import { BASE_URL } from "../API";


export default function Login({setToken, setName}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');        
    
    
    async function loginUser(event) {
        

        event.preventDefault();
        
        
        fetch(`${BASE_URL}users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            
            body: JSON.stringify({
                user: {
                    username: username,
                    password: event.target[1].value
                }     
            })
        }, []) 
            .then(response => response.json())
          .then(result => {
            //console.log('token', result.data.token);

            console.log('username and password event', username, event.target[1].value)
            console.log('results ', result)
            if ( result.error) {
            
             console.log(error)   
            } else {
                setToken(result.data.token);
              // console.log('token', result.data.token);
               setName(username);
               // setPassword('');
                setError('');
            }                 
            console.log(setToken);
          })

          .catch(error => {
        alert(error)
            setError('An error occurred while logging in. ');
          });
    }        
    
    
    function logOut() {
        setName('')
       setToken('');
        localStorage.removeItem('token');
    }

    function isLoggedIn() {
        return !! localStorage.getItem('token');
        
    }

    function makeHeaders() {
        const headers = {
            'Content-Type': 'application/json'
        }
        if(isLoggedIn()) {
            headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
         
        }
        return headers
    } makeHeaders();
    return (
        <>
        {error && <p>{error}</p>}
        <form id="login" onSubmit={loginUser}>
           
            <input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              ></input>
            
              <input
              placeholder="Password"
               type="password"
               value={password}
               onChange={(event) =>  setPassword(event.target[1])}
              ></input>
            <button type="submit" className="submit-btn">Login Submit</button>
        </form>
        <form id="logout" onSubmit={logOut} ><button type="submit" className="submit-btn" >Log Out</button></form>
        </>
    );
    
}

export {Login};