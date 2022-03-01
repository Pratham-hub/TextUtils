// import logo from './logo.svg';
import './App.css'; //Code to import css file.
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  // const [blueMode, setBMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // const toggleModeBlue = ()=>{
  //   if(blueMode=='light'){
  //     setBMode('dark')
  //     document.body.style.backgroundColor = '#01112b';
  //     showAlert('Blue Mode has been Activated', 'success');
  //   }
  //   else{
  //     setBMode('light')
  //     document.body.style.backgroundColor = 'white';
  //     showAlert('Light Mode has been Activated', 'success');
  //   }
  // }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1b1b1c';
      showAlert('Dark Mode has been Activated', 'success');
      document.title = 'TextUtils - Home(Dark Mode)'

      // setInterval(() => {
      // document.title = 'Install TextUtils'
      // }, 5000);

      // setInterval(() => {
      // document.title = 'TextUtils is Amazing'
      // }, 2000);
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Activated', 'success');
      document.title = 'TextUtils - Home'
    }
  }

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  return (
      <>
        {/* <Navbar AboutText = 'More Of Us' title='TextUtils' mode={mode} blueMode={blueMode} toggleMode={toggleMode} toggleModeBlue={toggleModeBlue}/> */}
        <Router>
          <Navbar AboutText = 'About' title='TextUtils' mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container my-3">
          <Switch>
              <Route exact path="/about">
                <About mode={mode}/>
              </Route>
              <Route exact path="/">
                <TextForm showAlert={showAlert} heading="Enter your text to analyse" mode={mode}></TextForm>
              </Route>
          </Switch>
          </div>
        </Router>
      </>
  );
}

export default App;

// Everything infront of red dots is jsx.