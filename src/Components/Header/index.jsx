import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo_1.png"

import { FcSearch } from "react-icons/fc";
import Button from '@mui/material/Button';
import { LuCircleUserRound } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import CountryDropdown  from "../CountryDropdown";
import { MyContext } from "../../App";


const Header = () => {

  const context = useContext(MyContext)
  return (
    <>
      <div className="headerWrapper">
        {/* ===== TOP STRIP SECTION ===== */}
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">Hare ka Sahara Shyam 🙏 Baba Shyam ki Jai ✨💛</p>
          </div>
        </div>

        {/* ===== MAIN HEADER SECTION ===== */}
        <header className="header">
          <div className="container">
            <div className="row d-flex align-items-center">
              {/* Logo Section */}
              <div className="logoWrapper d-flex align-items-center justify-content-center col-lg-2 col-md-12">
                <Link to={'/'}>
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>

              {/* Header Main Content Section */}
              <div className="col-lg-10 col-md-12 d-flex align-items-center part2">
                {/* dropdown */}
                {context.countryList.length!==0 && <CountryDropdown />}



                {/* Search Bar Section */}
                <div className="headerSearch d-flex align-items-center">
                  <input
                    type="text"
                    placeholder="Search for products..."
                  />
                  <Button>
                    <FcSearch />
                  </Button>
                </div>

                {/* User & Cart Section */}
                <div className="part3">
                  <Button className="circle">
                    <LuCircleUserRound />
                  </Button>
                  <div className="price">₹499</div>
                  <div className="cartTab">
                    <div className="position-relative">
                      <Button className="circle">
                        <IoBagHandleOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ===== NAVIGATION SECTION ===== */}
        <nav>
          <div className="container">
            {/* Left Part - All Categories Button */}
            <div className="navPart1">
              <Button className="allCatTab">
                <span className="icon1">
                  <IoIosMenu />
                </span>
                <span className="text">All Categories</span>
                <span className="icon2">
                  <FaAngleDown />
                </span>
              </Button>
            </div>

            {/* Right Part - Navigation Menu */}
            <div className="navPart2">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/deals">Deals</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>












      </div>
    </>
  )
}

export default Header;