
import './App.css';

import Navbar from './components/Navbar';
import Alert from './components/alert';
import TextForm from './components/textForm';
/* import About from './components/About'; */
import React, { useState } from 'react';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";*/

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
          msg: message,
          type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
      
  const toggleMode = ()=>{
      if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setBtnText('Light Mode');
      showAlert("Dark mode has been enabled", "success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        setBtnText('Dark Mode');
        showAlert("Light mode has been enabled", "success");
        }
      }

  return (
    <>
 {/*  <Router>   */}
    <Navbar title="My App" homeText="Home" mode={mode} btnText={btnText} toggleMode={toggleMode} aboutText="About Us"/>
    <Alert alert={alert}/>
    <div className="container my-2">
    
     {/*  <Routes>
              <Route path="/About" element={<About />}/>        
              
              {/*<Route path="/" element={*/}
                <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />
      {/*   }/>  */}
 {/*  </Routes>  */}
    
    </div>
 {/*   </Router>  */}

    </>
  );
}

export default App;
