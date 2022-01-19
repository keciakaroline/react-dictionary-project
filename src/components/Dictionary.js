import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for: ${keyword}`);
  }

  function handleNewKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleNewKeyword} />
      </form>
    </div>
  );
}
