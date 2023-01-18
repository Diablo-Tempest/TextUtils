// import "./App.css";
import React from "react";
// import About from "./components/About";
import {useState} from 'react';
// import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether darkmode is enabled on not
  // const [alert, setAlert] = useState(null);
  // const showAlert = (message, type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //       setAlert(null)
  //   }, 1000);
  // }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#262c33'
      // showAlert("Dark Mode Enabled", "success")
      document.title = 'TextUtils - Dark Mode Enabled'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      // showAlert("Light Mode Enabled", "success")
      document.title = 'TextUtils - Light Mode Enabled'
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/* <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route path='/about' element={<About mode={mode}/>}>
          </Route>
          <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/>}> */}
          <TextForm /*showAlert={showAlert}*/ heading="Enter The Text To Analyze Below" mode={mode} /> 
          {/* </Route>
        </Routes>
      </div> */}
    {/* </Router> */}
    </>
  );
}

export default App;
