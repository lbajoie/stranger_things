import { Header } from './components/Header';
import './App.css';
//import { Dummy } from './components/Dummy';
//import { Footer } from './components/Footer';
import  {Posts}  from './components/Posts';
import {NewUserForm} from './components/NewUserForm';
import {Create} from './components/Createpost';
//import { BASE_URL } from './API/index';
import {Login} from './components/Login'
import React, { useState } from 'react';

function App() {
  const [token, setToken] = useState('')
  return (
    <div className='container'>
      <Header />  
      <Posts />
       <Login setToken={setToken}/> 
       <NewUserForm />
      <Create token = {token}/>
     
   
   
    </div>
  
  );
}

export default App;
