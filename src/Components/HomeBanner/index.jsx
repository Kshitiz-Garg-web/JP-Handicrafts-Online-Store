import React from "react";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";

function HomeBanner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,    // 👈 optional, default 3000ms
    pauseOnDotsHover:true,
    cssEase:"ease-in-out"
  };

  return (
    <div className='homeBannerSection'>
      <Slider {...settings}>
        <div className="item">
          <img style={{ height: "100%", width: "100%" }} src="https://cmsimages.shoppersstop.com/House_of_Exclusive_web_4202ac7f2f/House_of_Exclusive_web_4202ac7f2f.png" alt="img_1" />
        </div>
        <div className="item">
          <img style={{ height: "100%", width: "100%" }} src="https://cmsimages.shoppersstop.com/Women_Indian_main_banner_web_a26308f1b8/Women_Indian_main_banner_web_a26308f1b8.png" alt="img_2" />
        </div>
        <div className="item" style={{ height: "300px", width: "100%" }}  >
          <img style={{ height: "100%", width: "100%" }} src="https://cmsimages.shoppersstop.com/step_up_main_kv_web_04a767ab2c/step_up_main_kv_web_04a767ab2c.gif" alt="img_3" />
        </div>
        <div className="item" style={{ height: "300px", width: "100%" }}  >
          <img style={{ height: "100%", width: "100%" }} src="https://cmsimages.shoppersstop.com/menswear_main_banner_web_447a2f8289/menswear_main_banner_web_447a2f8289.png" alt="img_4" />
        </div>
        <div className="item" style={{ height: "300px", width: "100%" }}  >
          <img style={{ height: "100%", width: "100%" }} src="https://cmsimages.shoppersstop.com/Beauty_Stock_Up_SS_Web_28404509f4/Beauty_Stock_Up_SS_Web_28404509f4.jpg" alt="img_5" />
        </div>
        <div className="item" style={{ height: "300px", width: "100%" }}  >
          <img style={{ height: "100%", width: "100%" }} src="https://cmsimages.shoppersstop.com/Women_Western_main_banner_web_6bf25a4e3f/Women_Western_main_banner_web_6bf25a4e3f.png" alt="img_6" />
        </div>

      </Slider>
    </div>
  )
}

export default HomeBanner