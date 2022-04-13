import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('black')
      document.body.style.backgroundColor = '#1d1e1f'
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  const [mode, setmode] = useState('light')
  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextArea heading="Enter the text to analyze below " mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
