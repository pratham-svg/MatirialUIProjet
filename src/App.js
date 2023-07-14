import './App.css'
import Header from './components/common/Header';
import Home from './components/Pages/Home'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import About from './components/Pages/About';
import Footer from './components/common/Footer';
import Contact from './components/Pages/Contact'
import Pricing from './components/Pages/Pricing';
import Calculator from './components/Pages/Calculator';
import Signup from './components/Pages/signup';

function App() {
  return (
    <div >
    <Router>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Calculator' element={<Calculator/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Pricing' element={<Pricing/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
