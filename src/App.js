import './App.css'
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Contact from './components/Pages/Contact';
import Calculator from './components/Pages/Calculator';


function App() {
  return (
    <div >
   <Header/>
   <Contact/>
   {/* <Calculator/> */}
   <Footer/>
    </div>
  );
}

export default App;
