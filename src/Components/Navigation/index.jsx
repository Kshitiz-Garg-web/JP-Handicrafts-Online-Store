import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";

const Navigation = () => {
  const [isOpenSideVal, setIsOpenSideVal] = React.useState(false);
  return (
    <nav>
      <div className="container">
        {/* Left Part - All Categories Button */}
        <div className="navPart1">
          <div className="catWrapper">
            <Button className="allCatTab" onClick={() => setIsOpenSideVal(!isOpenSideVal)}>
              <span className="icon1">
                <IoIosMenu />
              </span>
              <span className="text">All Categories</span>
              <span className="icon2">
                <FaAngleDown />
              </span>
            </Button>
          </div>
          <div className={`sidebarNav shadow ${isOpenSideVal===true?'open':''}`}>
          <Link to="/"><Button className="btn"> home</Button></Link>
          <Link to="/"><Button className="btn">SHOP</Button></Link>
          <Link to="/"><Button className="btn">About</Button></Link>
          <Link to="/"><Button className="btn">contact</Button></Link>
          
        </div>
        </div>

        {/* Right Part - Navigation Menu */}
        <div className="navPart2">
          <ul>
            <li>
              <Link to="/">Home</Link>
              <div className="submenu shadow">
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
              </div>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
              <div className="submenu shadow">
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
              </div>
            </li>
            <li>
              <Link to="/about">About</Link>
              <div className="submenu shadow">
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
              </div>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
              <div className="submenu shadow">
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
              </div>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
              <div className="submenu shadow">
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
              </div>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
              <div className="submenu shadow">
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
              </div>
            </li>
            <li>
              <Link to="/deals">Deals</Link>
              <div className="submenu shadow">
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
                <Link to="/"><Button className="btn">Submenu Item</Button></Link>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;