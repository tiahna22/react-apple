import React from 'react'
import ipad from "../Images/icons/new-ipad-logo.png";
//  import "./Css/Styles.css";

 function Sixth() {
  return (
      <>
          <section className=" text-center container-fluid  sixth-heghlight-wrapper">
    <div className=" row ">
      <div className=" col-md m-2 left-side-wrapper">
        <div className="model">
          16-inch model
        </div>

        <div className="product-title-small">
          MacBook Pro
        </div>

        <div className="description-wraper">
          The best for the brightest.
        </div>

        <div className="links-wrapper">
          <ul>
            <li><a href="">Learn more</a></li>
            <li><a href="">Buy</a></li>
          </ul>
        </div>
      </div>
      <div className=" col-md m-2 right-side-wrapper">
        <div className="top-logo-wrapper">
          <div className="logo-wrapper">
            <img src={ipad}/>
          </div>
        </div>

        <div className="description-wraper">
          Like a computer. Unlike any computer.
        </div>

        <div className="links-wrapper">
          <ul>
            <li><a href="">Learn more</a></li>
            <li><a href="">Buy</a></li>
          </ul>
        </div>
      </div>
    </div>
      </section>
      </>
  )
}
export default Sixth;