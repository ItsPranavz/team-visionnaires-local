import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Banner from './components/Banner.jsx';
import ContactForm from './components/ContactForm.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  WhyChoose  from '../src/components/WhyChoose.jsx';
function App() {
  return (
    <>
        <Header />
        <Banner />
        <WhyChoose />
        <Footer />
        
    </>
  );
}

export default App;
