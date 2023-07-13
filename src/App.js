import './App.css'
import Header from './components/common/Header';
import Home from './components/Pages/Home'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';


function App() {
  return (
    <div >
  
   <Router>
   <Header/>
 
   <Footer/>
    </div>
  );
}

export default App;
