
import './App.css';
import Navbar from './components/navbar';
import Awards from './components/awards';
import Cards from './components/cards';
import Gallery from './components/gallery';
import Contact from './components/contact';
import Footer from './components/footer';
import PersonInfo from './components/personInfo';
import EducationInfo from './components/educationInfo';
import Skills from './components/skills';
import Language from './components/language';
import Exprient from './components/Exprient';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <PersonInfo/>
  <EducationInfo/>
  <Skills/>
  <Language/>
  <Exprient/>  
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
