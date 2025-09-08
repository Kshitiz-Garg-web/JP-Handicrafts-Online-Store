import Dialog from '@mui/material/Dialog';
import { IoIosClose } from "react-icons/io";
import Button from '@mui/material/Button';
import { FcSearch } from "react-icons/fc";
import { useContext, useEffect, useState } from "react";
import Slide from '@mui/material/Slide';
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { MyContext } from '../../App';
import { FaLocationArrow } from "react-icons/fa6";



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {

  const [isOpenModel, setIsOpenModel] = useState(false);
  const [selectedTabCountry, setSelectedTabCountry] = useState(null);
  const [countryList, SetCountryList] = useState([])

  const context = useContext(MyContext);

  const selectCountryHandler = (e) => {
    setIsOpenModel(false)
    setSelectedTabCountry(e.target.innerText)
    SetCountryList(context.countryList)
    context.setDefaultStr("")
  }

  useEffect(() => {
    SetCountryList(context.countryList)
  }, [])

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if (keyword !== "") {
      const list = context.countryList.filter((country) => country.toLowerCase().includes(keyword))
      SetCountryList(list)
    } else {
      SetCountryList(context.countryList)
    }
  }

  return <>
    <div className="">
      <Button className="countryDrop " onClick={() => setIsOpenModel(true)}>
        <div className="info d-flex">
          <span className="label">Your Location</span>
        </div>
        <span className="name">{context.defaultStr!=""? <FaLocationArrow />
: ""} {context.defaultStr==""?selectedTabCountry?.length > 10 ? selectedTabCountry.substring(0, 10) + "..." : selectedTabCountry : context.defaultStr}  <FaAngleDown />
        </span>
      </Button>
    </div>

    <Dialog slots={{
      transition: Transition,
    }} open={isOpenModel} onClose={() => {
      setIsOpenModel(false)
       SetCountryList(context.countryList)
    }} className="locationModal">
      <h4>Choose your Delivery Location</h4>
      <p>Enter your address and we will specify the offer for your area.</p>
      <Button className="close_" onClick={() => {
      setIsOpenModel(false)
       SetCountryList(context.countryList)
    }}><IoIosClose /></Button>
      {/* Search Bar Section */}
      <div className="headerSearch ">
        <input
          type="text"
          placeholder="Search for Area"
          onChange={filterList}
        />
        <Button >
          <FcSearch />
        </Button>
      </div>
      <ul onClick={selectCountryHandler} className="countryList ">
        {countryList.map((item, index) => (
          <li className={`${selectedTabCountry === item ? 'active' : ''}`} key={index}><Button>{item}</Button></li>
        ))}
      </ul>
    </Dialog>
  </>
}

export default CountryDropdown