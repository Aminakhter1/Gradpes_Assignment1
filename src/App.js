
import './App.css';
import About from './components/About';
import CardSection from './components/CardSection';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Resource from './components/Resource';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <CardSection/>
      <About/>
     <Resource/>
     <ContactPage/>
     <Footer/>
     </>
    
  );
}

export default App;