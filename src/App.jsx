import React from 'react';
import './App.scss'
import { Router, Route, Routes} from "react-router-dom"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import MovieDetail from "./components/MovieDetail/MovieDetail"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div className='app'>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/movie/:imdID" element={<MovieDetail/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
        </div>
        <Footer />
    </div>
  )
}

export default App
