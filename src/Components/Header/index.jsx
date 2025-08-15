import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo_1.png"
import CountryDropdown from "../CountryDropdown";
import { FcSearch } from "react-icons/fc";
import Button from '@mui/material/Button';
import { LuCircleUserRound } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";




const Header = () => {
  return (
    <>
    <div className="headerWrapper">
      <div className="top-strip bg-blue">
        <div className="container">
          <p className="mb-0 mt-0 text-center">Hare ka Sahara Shyam 🙏 Baba Shyam ki Jai ✨💛</p>
        </div>
      </div>

      <header className="header">
        <div className="container">
          <div className="row">
            <div className="logoWrapper d-flex align-items-center col-sm-1">
              <Link to={'/'}> <img src={Logo} alt="Logo" /></Link> 
            </div>

            <div className="col-sm-11 d-flex align-items-center part2">
              <CountryDropdown />
            {/* Header Search Start Here */}
              <div className="headerSearch d-flex align-items-center">
                <input type="text" placeholder="Search for products..." />
                <Button><FcSearch /></Button>
              </div>
            {/* Header Search End Here */}

            <div className="part3 d-flex align-items-center justify-content-between">
              <Button className="circle mr-3"><LuCircleUserRound /></Button>
              <div className="cartTab d-flex align-items-center justify-content-around ">
                <div className="price">₹499</div>
                <div className="position-relative ml-auto">
                  <Button className="circle"><IoBagHandleOutline /></Button>
                  <span className="count d-flex align-items-center justify-content-center">1</span>
                </div>
              </div>
            </div>
            </div>
        
          </div>
        </div>
      </header>
      
    </div>
    </>
  )
}

export default Header;
