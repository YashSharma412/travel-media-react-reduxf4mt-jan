import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PlaceCard from "./PlaceCard";
import { Link } from "react-router-dom";

function Home(props) {
  const { loading, data, error } = useSelector((state) => state);
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
            <PlaceCard post={post} />
          ))}
      </div>
    </div>
  );
}

export default Home;
