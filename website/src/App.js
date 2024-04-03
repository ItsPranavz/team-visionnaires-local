import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ContactForm from './components/ContactForm.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
        <Header />
        <ContactForm />
        <Footer />
    </>
  );
}

export default App;
