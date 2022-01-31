import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";
import Phonetic from "./Phonetic";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState("");

  function handleResponse(response) {
    //console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //documentation api: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleNewKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary 📚</h1>
      <section>
        <form onSubmit={search} className="text-center pt-4">
          <input type="search" autoFocus={true} onChange={handleNewKeyword} />
        </form>
        <h6>word must be spelled correctly & in English</h6>
      </section>

      <Results results={results} />
    </div>
  );
}
