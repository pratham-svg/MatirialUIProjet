import './App.css'
import Header from './components/common/Header';
 
import About from './components/Pages/About';
import Signup from './components/Pages/signup';

import Footer from './components/common/Footer';

function App() {
  return (
    <div >
      <Header />
       
      <About />

      <Signup />

      <Footer />
    </div>
  );
}

export default App;
