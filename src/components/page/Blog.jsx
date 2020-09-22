import React, { useEffect, useState } from "react";
import Image from "./components/Image";
import Loader from "./components/Loader";
import { getCatImg } from "../../util/api";
import { fetchImg } from "../../util/api";

export default function Blog() {
  const [imageUrl, setImageUrl] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = () => {
    setLoading(true);
    setImageUrl("");

    fetchImg().then((response) => {
      setImageUrl(response.data[0].url);
      setLoading(false);
    });
  };

  return (
    <div className="container">
      {loading && <Loader />}
      {imageUrl.length ? (
        <Image img={imageUrl} />
      ) : loading ? null : (
        <h1>No photo 😿</h1>
      )}
      <div className="btn-container">
        <button className="btn" onClick={fetchImage}>
          Upload new cat
        </button>
        <button
          className="btn"
          onClick={() => {
            setImageUrl("");
          }}
        >
          Delete cat image
        </button>
      </div>
    </div>
  );
}
