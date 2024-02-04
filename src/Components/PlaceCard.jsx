import React from 'react'
import testImg from "../assets/images/test_img.png";
import arrowImage from "../assets/icons/rightCarrot.svg";
import { useNavigate } from "react-router-dom";

function PlaceCard({post}) {
  const navigate = useNavigate();

  return (
    <div className="place__container" key={post.id}>
              <div className="place__img">
                <img
                  src={`https://picsum.photos/200?random=${post.id}`}
                  alt="place img"
                />
              </div>
              <div className="place__details">
                <h5 className="post__title">{post.title.slice(0, 30)}...</h5>
                <div style={{ display: "flex", gap: "1.7rem" }}>
                  <p className="post__description">
                    {post.body.slice(0, 180)}
                    <span className="showMore"> Read more...</span>
                  </p>
                  <div>
                    <button onClick={()=>navigate(`/item/${post.id}`)} className="show__details-btn">
                      <img src={arrowImage} alt="arrow" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default PlaceCard;