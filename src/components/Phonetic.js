import React from "react";

export default function Phonetic(props) {
  // console.log(props.phonetic);
  let audio = new Audio(props.phonetic.audio);

  function start() {
    audio.play();
  }

  return (
    <div className="Phonetic">
      <i class="fa-regular fa-circle-play" onClick={start}></i>

      {props.phonetic.text}
    </div>
  );
}
