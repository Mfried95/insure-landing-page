import './App.css';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import Middle from './Components/Middle';
import Banner from './Components/Banner';


function App() {
  return (
    <div className="App">
     <Navigation/>
     <Hero/>
     <Middle/>
     <Banner/>
    </div>
  );
}

export default App;
