import React from "react";

export default function Phonetic(props) {
  // console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <img
          src="https://yeyeong-react-dictionary.netlify.app/static/media/volume-up.1175ee35976a5046a3b8c79c30515164.svg"
          alt="volume"
          width="20"
          height="20"
        ></img>
      </a>

      {props.phonetic.text}
    </div>
  );
}
