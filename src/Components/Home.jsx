import React from "react";
import testImg from "../assets/images/test_img.png";
import arrowImage from "../assets/icons/rightCarrot.svg";
function Home(props) {
  return (
    <div className="homepage">
      <h1 className="section__heding">Social Media For Travellers</h1>
      {props.children}
      <div className="places__grid">
        <div className="place__container">
          <div className="place__img">
            <img src={testImg} alt="place img" />
          </div>
          <div className="place__details">
            <h5 className="post__title">Lorem ipsum</h5>
            <div style={{display: "flex", gap: "1.7rem"}}>
              <p className="post__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo incidunt neque cum repudiandae enim facere porro quis
                corporis, debitis exercitationem!
                <span className="showMore"></span>
              </p>
              <div>
                <button className="show__details-btn">
                  <img src={arrowImage} alt="arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
