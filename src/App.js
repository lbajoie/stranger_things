import { Header } from './components/Header';
import './App.css';
//import { Dummy } from './components/Dummy';
import { Footer } from './components/Footer';
import  {Posts}  from './API';
import {Create} from './API';
import {NewUserForm} from './components/NewUserForm';
import {Login} from './components/Login'

function App() {
  return (
    <div className='container'>
      <Header />  
    <div class='row'>
      <div class='col'>
      <Posts />
      <aside class='col'>
        <Create />
      </aside>
      
    </div>
      <NewUserForm /> 
      <Login />
      <Footer />
    </div>
  </div>
  );
}

export default App;
