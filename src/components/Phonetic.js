import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  // console.log(props.phonetic);
  let audio = new Audio(props.phonetic.audio);

  function start() {
    audio.play();
  }

  return (
    <div className="Phonetic">
      <i class="far fa-play-circle icon" onClick={start}></i>{" "}
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
