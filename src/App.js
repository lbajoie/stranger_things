import { Header } from './components/Header';
import './App.css';
import { Delete } from './components/Delete';
//import { Update } from './components/Update';
//import { Footer } from './components/Footer';
import  {Posts}  from './components/Posts';
import {NewUserForm} from './components/NewUserForm';
import {Create} from './components/Createpost';
//import { BASE_URL } from './API/index';
import {Login} from './components/Login'
import React, { useState } from 'react';

function App({username, setUserName}) {
  const [token, setToken] = useState('')
  
  return (
    <div className='container'>
      <Header />  
      <Posts token = {token} username = {username}/>
      <Login setToken={setToken} username = {username} setUserName = {setUserName}/>
      {/* <Update /> */}
   
        
       {/* <Delete /> */}
       <NewUserForm />
      <Create token = {token}/>
      
   
    </div>
  
  );
}

export default App;
