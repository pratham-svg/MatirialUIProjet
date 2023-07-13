import './App.css'
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/Pages/Home'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';


function App() {
  return (
    <div >
  
   <Router>
   <Header/>
    <Routes>
    <Route path='/Home' element={<Home/>}/>
    </Routes>
    <Footer/>
   </Router>
 
    </div>
  );
}

export default App;
