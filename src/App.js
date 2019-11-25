import React from 'react'
import Header from './components/layout/header/Header'
import Footer from './components/layout/footer/Footer'
import './App.css'
import './Custom.scss'
import Home from './components/pages/home/Home'
import MyProvider from './context/MyProvider'

function App() {
  return (
    <MyProvider>
      <div>
        <Header/>
        <Home/>
        <Footer/>
      </div>
    </MyProvider>
  );
}

export default App
