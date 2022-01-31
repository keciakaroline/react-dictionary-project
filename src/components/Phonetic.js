import React from "react";

export default function Phonetic(props) {
  // console.log(props.phonetic);
  let audio = new Audio(props.phonetic.audio);

  function start() {
    audio.play();
  }
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <i class="far fa-play-circle" onClick={start}></i> {props.phonetic.text}
      </div>
    );
  } else {
    return <div className="phonetic">{props.phonetic.text}</div>;
  }
}
