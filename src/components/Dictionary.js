import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    //console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search() {
    //documentation api: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleNewKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>Dictionary 📚</h1>
        <section>
          <h2>What word do you want to look up?</h2>
          <form>
            <div className="container">
              <div className="row">
                <div className="col-sm-10">
                  <input
                    type="search"
                    className="input-form"
                    autoFocus={true}
                    onChange={handleNewKeyword}
                  />
                </div>
                <div className="col-sm-2">
                  <input
                    type="submit"
                    onSubmit={handleSubmit}
                    className="btn-form"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="hint">
            word must be spelled correctly & in English
          </div>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
