import './App.css';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import Middle from './Components/Middle';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Hero/>
     <Middle/>
     <Banner/>
     <Footer/>
    </div>
  );
}

export default App;
