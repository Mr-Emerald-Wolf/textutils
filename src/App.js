import './App.css';
import Navbar from './components /Navbar';
import TextForm from './components /TextForm';
//import About from './components /About';
//import { Routes, Route } from "react-router-dom";


import React, { useState } from 'react'

function App() {
  const [theme, setTheme] = useState('light')
  const [textTheme, setTextTheme] = useState('dark')


  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setTextTheme('light');
      document.body.style.backgroundColor = "black";
    }
    if (theme === 'dark') {
      setTheme('light');
      setTextTheme('dark');
      document.body.style.backgroundColor = "white";

    }

  }
  return (
    <>
      <Navbar title="TextUtils" mode={theme} textTheme={textTheme} changeTheme={changeTheme} />
      {/* <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={theme} textTheme={textTheme} button="Convert to Uppercase" />} />
        <Route exact path="about" element={<About mode={theme} textTheme={textTheme} />} />
      </Routes> */}
      <TextForm heading="Enter the text to analyze" mode={theme} textTheme={textTheme} button="Convert to Uppercase" />

    </>
  );
}

export default App;
