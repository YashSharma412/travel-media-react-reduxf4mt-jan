import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef } from "react";
import PlaceCard from "./PlaceCard";
function DetailsPage() {
  function toggle() {}
  const [format, setFormat] = useState("details");
  const params = useParams();
  const { data, loading, error } = useSelector((state) => state);
  const myPost = data.find((post) => post.id === parseInt(params.id));
  if (!myPost) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="detailsPage">
      <h1 className="section__heding">Post Number {myPost.id}</h1>
      <section className="hero__container">
        <div className="hero__img">
          <img
            src={`https://picsum.photos/200?random=${myPost.id}`}
            alt="post img"
          />
        </div>
        <div className="post__details">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: "2rem",
            }}
          >
            <button
              onClick={() => setFormat("details")}
              className={`post__btn ${format === "details" ? "active" : ""}`}
            >
              Detail
            </button>
            <button
              onClick={() => setFormat("user")}
              className={`post__btn ${format === "user" ? "active" : ""}`}
            >
              User Info
            </button>
          </div>
          {format === "details" && (
            <div className="full_details">
              <h2>{myPost.title}</h2>
              <p>{myPost.body}</p>
            </div>
          )}
          {format === "user" && <h1>User ID : {myPost.userId}</h1>}
        </div>
      </section>
      <h1 className="section__heding">More Posts</h1>
      <section className="places__grid">
        {loading && (
          <div className="loader">
            <h1>Loading...</h1>
          </div>
        )}
        {error && (
          <div className="error">
            <h1>Something went wrong...</h1>
            <p>{error}</p>
          </div>
        )}
        {data.length > 1 &&
          data
            .filter((post) => post.id !== params.id)
            .map((post) => <PlaceCard post={post} />)}
      </section>
    </div>
  );
}

export default DetailsPage;
