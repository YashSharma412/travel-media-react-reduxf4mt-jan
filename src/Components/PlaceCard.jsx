import React from 'react'

function PlaceCard() {
  return (
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
  )
}

export default PlaceCard