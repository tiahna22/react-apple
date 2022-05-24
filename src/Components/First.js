import React from 'react'
import mac from "../Images/home/mac-laptop.jpg";
// import "./Css/Styles.css";
 
function First() {
  return (
    <>
      <section className=" container-fluid main-highlight-wrapper">
        <div className="internal-wrapper">
          <div className="model">16-inch model</div>

          <div className="product-title">MacBook Pro</div>

          <div className="brief-description">The best for the brightest.</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>

          <div className="main-image-wrapper">
            <img src={mac}/>
          </div>
        </div>
      </section>
    </>
  );
}
export default  First;