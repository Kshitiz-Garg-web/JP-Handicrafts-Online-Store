import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
import axios from 'axios'


const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([])
  const [defaultStr,setDefaultStr]=useState("Enter")  
  console.log(countryList)

  useEffect(() => {
    getCountry('https://restcountries.com/v3.1/independent?status=true')
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => res.data.map((item) => item.name.common)
    )
    setCountryList(responsive)
  }

  const values = {
    countryList,
    defaultStr,
    setDefaultStr
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path='/' exact={true} element={<Home />} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>

    </>
  )
}

export default App

export { MyContext }
