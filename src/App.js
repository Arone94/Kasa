import {Routes, Route} from "react-router-dom";
import './style/index.scss';
import Home from './pages/Home';
import About from './pages/About';
import Logements from './pages/Logements';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path='/a-propos' element={ <About /> }/>
          <Route path='/logement/:id' element={ <Logements /> }/>
          <Route path='*' element={ <Error /> }/>
        </Routes>
      <Footer/>
    </div>
  );
}
export default App;
