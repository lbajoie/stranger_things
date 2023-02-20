import { Header } from './components/Header';
import './App.css';
//import { Dummy } from './components/Dummy';
import { Footer } from './components/Footer';
import  {Posts}  from './API';

function App() {
  return (
    <div className='container'>
      <Header />
      <Posts />
      {/* <Dummy /> */}
      <Footer />
    </div>
  );
}

export default App;
