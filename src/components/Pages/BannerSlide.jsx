import React from 'react';
import img1 from "../../assests/images/Fingrad/b 1.jpg";
import img2 from "../../assests/images/Fingrad/b2.jpg";
import img3 from "../../assests/images/Fingrad/b3.jpg";
import img4 from "../../assests/images/Fingrad/b4.jpg";
import img5 from "../../assests/images/Fingrad/b5.jpg";
import img6 from "../../assests/images/Fingrad/b6.jpg";
import img7 from "../../assests/images/Fingrad/b7.jpg";
import img8 from "../../assests/images/Fingrad/b8.jpg";
import img9 from "../../assests/images/Fingrad/b9.jpg";
import img10 from "../../assests/images/Fingrad/b10.jpg";

function BannerSlide() {

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
  return (
    <div className='bannerSlideDiv'>
      <span>Created multiple captivating banners with creative designs & vibrant colors.</span>

      <div className='slidercontainer'>
        <div className='silderAnimi'>
          {images.map((img, index) => (
              <img className='sliderimg' key={index} src={img} alt={`Banner ${index + 1}`} />
          ))}
        </div>
      </div>

      <div className='slidercontainer'>
        <div className='silderAnimi2'>
          {images.map((img, index) => (
              <img className='sliderimg' key={index} src={img} alt={`Banner ${index + 1}`} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default BannerSlide;
