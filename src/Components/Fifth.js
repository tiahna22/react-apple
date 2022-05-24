import React from 'react'

import appletv from "../Images/icons/apple-tv-logo.png";
import servant from "../Images/icons/servant-logo.png";
// import './Css/Styles.css';
// import './Css/Bootstrap.js';
// import './Css/Jquery.js';
// import './Css/Custom.js';
 function Fifth() {
  return (
      <>
        <section className=" container-fluid  fifth-heghlight-wrapper">

    <div className="row">
      <div className=" m-2 col-md left-side-wrapper">
        <div className="pt-3 mt-4 top-logo-wrapper">
          <div className="logo-wrapper tv">
        <img src={appletv}/>
          </div>
        </div>

        <div className="tvshow-logo-wraper">
          <img src={servant}/>
        </div>

        <div className="watch-more-wrapper text-center">
          <a href=" #">Watch the trailer</a>
        </div>
      </div>
      <div className=" text-center col-md m-2 right-side-wrapper">
        <div className="top-logo-wrapper">
          <div className="logo-wrapper">
            AirPods Pro
          </div>
        </div>

        <div className="description-wraper">
          Magic like you've never heard.
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
export default Fifth;