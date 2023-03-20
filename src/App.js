import { Header } from './components/Header';
import './App.css';
//import { Dummy } from './components/Dummy';
//import { Footer } from './components/Footer';
import  {Posts}  from './components/Posts';
import {NewUserForm} from './components/NewUserForm';
import {Create} from './components/Createpost';

import {Login} from './components/Login'

function App() {
  return (
    <div className='container'>
      <Header />  
      <Posts />
      
       <Login /> 
       <NewUserForm />
      <Create />
      
   
   
    </div>
  
  );
}

export default App;
