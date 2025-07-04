
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Navbar from './components/navbar/Navbar'
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './store/store'
import Footer from './components/footer/Footer'

function App() {

  return (
    <Provider store={store} >

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
    <Footer />
  
    </BrowserRouter>


    </Provider>


  )
}

export default App
