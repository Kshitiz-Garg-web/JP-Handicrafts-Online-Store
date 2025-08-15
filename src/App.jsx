import 'bootstrap/dist/css/bootstrap.min.css' 
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'

import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
       <Routes>
        <Route path='/' exact={true} element={<Home />} />
       </Routes>
      </BrowserRouter>
   
    </>
  )
}

export default App
