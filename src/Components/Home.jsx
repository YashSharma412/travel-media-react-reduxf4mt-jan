import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import testImg from "../assets/images/test_img.png";
import arrowImage from "../assets/icons/rightCarrot.svg";
import { postApiRequest } from "../redux/actions/postApiActions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Home(props) {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(postApiRequest());
  }, []);
  return (
    <div className="homepage">
      <h1 className="section__heding">Social Media For Travellers</h1>
      {props.children}
      <div className="places__grid">
        {loading && (
          <div className="loader">
            <h1>Loading...</h1>
          </div>
        )}
        {
          error && (
            <div className="error">
              <h1>Something went wrong...</h1>
              <p>{error}</p>
            </div>
          )
        }
        {data.length > 0 &&
          data.map((post) => (
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
          ))}
      </div>
    </div>
  );
}

export default Home;
