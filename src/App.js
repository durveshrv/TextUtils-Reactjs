import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import { useState } from 'react';
import Alertx from './Components/Alertx';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  const [mode,setDarkMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setDarkMode('dark');
      document.body.style.backgroundColor="#062759";
      showAlert("Dark mode has enabled","success")
      document.title="TextUtils - DarkMode";
      setInterval(()=>{
        document.title="TextUtils is Amazing."
      },2000)
      setInterval(()=>{
        document.title="Install TextUtils Now."
      },1500)
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has enabled","success")
    }
  }
  return (
    <>
    <Navbar title="TextUtils" AboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alertx alert={alert}/>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
        <Route path="/about" element={<div className='container'><About/></div>} />
      </Routes>
    </BrowserRouter> */}
    <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
    </>
  );
}

export default App;
