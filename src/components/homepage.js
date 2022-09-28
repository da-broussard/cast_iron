import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../style/homepage.css";

function Homepage() {
  return (
    <>
      <div className="main_container">
        <div className="brand_names">
          <div className="brand_container">
            <h2>Our Story</h2>
            <p>What started out as going to estate sales around Louisiana and Mississippi while working away from home, has now turned 
              into an inventory of close to five hundred pieces of cast iron fully restored and saved from being covered in rust and forgoten.
              Featuring highly sought after brands like Griswold and Chicago Foundry, to other well known American made brands like Birmingham
              Stove & Range, Lodge, and Wagner.  We have a huge variety of cast iron with some dating back from the 1890s.  
            </p>
            <ul>
              <li>Dutch Ovens No.7, No.8, No.10, and No.12</li>
              <li>Skillets No.3, No. 5, and No.6</li>
              <li>Both Round and Rectangular Cast Iron</li>
              <li>Chicken Fryers No.8, No. 10</li>
              <li>Sauce Pots No.2, No.4, and No.6</li>
              <li>Hibachi Sportsman Grills</li>
            </ul>
          </div>
        </div>
        <div className="carousel_container">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src="https://www.booniehicks.com/wp-content/uploads/2018/12/Griswold-Cast-iron-skillet-with-block-logo-1067x800.jpg"
                alt="cast iron"
              />
              <Carousel.Caption className="caption">
                <h3>We offer a wide variety items from multiple brands</h3>
                <p>Fully restored and ready to last for a lifetime</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src="https://assets.weimgs.com/weimgs/rk/images/wcm/products/202217/0018/lodge-cast-iron-hibachi-grill-c.jpg"
                alt="cast iron"
              />
              <Carousel.Caption className="caption">
                <h3>Specialize in hard to find items</h3>
                <p>Rare lids and Hibachi grills</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src="https://www.freshoffthegrid.com/wp-content/uploads/how-to-season-cast-iron-skillet-1.jpg"
                alt="cast iron"
              />
              <Carousel.Caption className="caption">
                <h3>We offer a wide variety items from multiple brands</h3>
                <p>Fully restored and ready to last for a lifetime</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      
      
      
    </>
  );
}

export default Homepage;
