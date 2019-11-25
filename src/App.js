import React from 'react'
import Header from './components/layout/header/Header'
import Footer from './components/layout/footer/Footer'
import './App.css'
import './Custom.scss'
import Home from './components/pages/home/Home'

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App
