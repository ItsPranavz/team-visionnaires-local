import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Banner from './components/Banner.jsx';
import Data from './components/Data.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  Features  from '../src/components/Features.jsx';
import Heading from './components/Heading.jsx';

function App() {
  return (
    <>
        <Header />
        <Banner />
        <Heading title="Key Features" />
        <Features />
        <Data />
        <Footer />
    </>
  );
}

export default App;
