import React from "react";
import "../../../../src/index.css";

export default function Book({ img }) {
  return <img alt="Cat Image" className="img" src={img} />;
}
