import './App.css'
import Header from './components/common/Header';
import Contact from './components/Pages/Contact';
import Calculator from './components/Pages/Calculator';
 import Signup from './components/Pages/signup';

function App() {
  return (
    <div >
   <Header/>
   {/* <Contact/> */}
   
   <Signup/>
    </div>
  );
}

export default App;
