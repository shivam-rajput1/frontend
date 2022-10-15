//import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Footer from "./component/Footer"
import Signup from "./component/Signup"

function App() {
  return (
    <div className = "App">
      <BrowserRouter>
      <Nav />
      <Routes>
              <Route path= "/" element = {<h1>Product Listing Component</h1>} />
              <Route path= "/add" element = {<h1>Add Product Component</h1>} />
              <Route path= "/update" element = {<h1>Update Product Component</h1>} />
              <Route path= "/logout" element = {<h1>Logout Component</h1>} />
              <Route path= "/profile" element = {<h1>Profile Component</h1>} />
              <Route path= "/signup" element = {<Signup />} />
      </Routes>
      <Footer />
      {/* <h1>E-Dashboard</h1> */}
      </BrowserRouter>
    </div>
    
  );
}

export default App;
