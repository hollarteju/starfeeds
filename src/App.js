import {React} from "react-dom"
import './App.css';
import { Navbar } from "./component/navbar";
import SignInPage from "./component/sign_in"
import SignUpPage from "./component/sign_up"
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Routes, Navigate} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route  path="" element={<SignInPage/>}/>
          <Route  path="sign_up" element={ <SignUpPage/>}/>
        </Routes>

      </Router>
      
     
    </div>
  );
}

export default App;
