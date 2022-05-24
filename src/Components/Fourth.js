import React from 'react'
import card from "../Images/icons/apple-card-logo.png";
import watch from "../Images/icons/watch-series5-logo.png";
// import "./Css/Styles.css";
 function Fourth() {
  return (
      <>
          <section className=" container-fluid text-center fourth-heghlight-wrapper">
    <div className="row ">
      <div className="col-md m-2 left-side-wrapper ">
        <div className=" top-logo-wrapper">
          <div className="  logo-wrapper">
            <img src={watch}/>
          </div>
        </div>
        <div className="description-wraper">
          With the new Always-On Retina display.<br/>
          You've never seen a watch like this.
        </div>
        <div className="links-wrapper">
          <ul>
            <li><a href="">Learn more</a></li>
            <li><a href="">Buy</a></li>
          </ul>
        </div>
      </div>

      <div className="col-md mb-2 right-side-wrapper ">
        <div className="top-logo-wrapper">
          <div className=" logo-wrapper">
            <img src={card}/>
          </div>
        </div>
        <div className="description-wraper">
          Get 3% Daily Cash on purchases from Apple using Apple Card.
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
export default  Fourth;