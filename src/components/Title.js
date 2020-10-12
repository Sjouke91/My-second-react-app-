// src/components/Title.js
import React from "react";
import "../style/title.css";

export default function Title(props) {
  return <h1 className="title">{props.content}</h1>;
}
