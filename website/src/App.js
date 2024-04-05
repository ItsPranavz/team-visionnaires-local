import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import Home from './pages/Home'
import WebAppHeader from './components/WebAppHeader';
;
function App() {
  return (
    <>
        <Router>
        <>
       
          <Routes>
            <Route exact path="/aboutus" Component={AboutUs}/>
            <Route exact path="/contactus" Component={ContactUs}/>
            <Route exact path="/products" Component={Products}/>
            <Route exact path="/" Component={Home}/>
          </Routes>
         
        </>
      </Router>
      
    


    </>
  );
}

export default App;