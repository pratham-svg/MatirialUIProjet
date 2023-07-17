import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import Register from './components/Pages/Register';
import Tables from './components/Pages/Tables';
import UtilitiesAnimation from './components/Pages/UtilitiesAnimation';
import UtilitiesColor from './components/Pages/UtilitiesColor';
import UtilitiesBorder from './components/Pages/UtilitiesBorder';
// import UtlitiesOther from './components/Pages/UtlitiesOther';
// import UtilitiesBorder from './components/Pages/UtilitiesBorder';
import UtlitiesOther from './components/Pages/UtlitiesOther';
import Index from './components/Pages/Index';
import NotFound from './components/Pages/NotFound';
import Blank from './components/Pages/Blank';
import Button from './components/Pages/Button';
import Cards from './components/Pages/Cards';
import ForgotPassword from './components/Pages/ForgotPassword';
import Login from './components/Pages/Login'



function App() {
 
  return (
    <div>
        <Router>
    
    <Routes>
    <Route path='/' element={<Index/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Tables' element={<Tables/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/UtilitiesAnimation' element={<UtilitiesAnimation />}/>
    <Route path='/UtilitiesBorder' element={<UtilitiesBorder/>}/>
    <Route path='/UtilitiesColor' element={<UtilitiesColor />}/>
    <Route path='/UtlitiesOther' element={<UtlitiesOther/>}/>
    <Route path='/Blank'element={<Blank/>}/>
    <Route Path='/Button' element={<Button/>}/>
    <Route path='/Cards'element={<Cards/>}/>
    <Route path='/ForgotPassword' element={<ForgotPassword/>} />
    <Route path='/NotFound' element={<NotFound/>} />
    </Routes>
    
    </Router>


    
    </div>
  );
}

export default App;
