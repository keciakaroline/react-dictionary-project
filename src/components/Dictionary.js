import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState("");

  function handleResponse(response) {
    //console.log(response.data[0]);
    setResults(response.data[0]);
    setLoaded(true);
  }

  function handlePexelsResponse(response) {
    //console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation api: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001c80cafe5e273474b88ca60632d697ba3";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleNewKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>Dictionary 📚</h1>
        <section>
          <h2>What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
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
                  <input type="submit" className="btn-form" />
                </div>
              </div>
            </div>
          </form>
          <div className="hint">
            word must be spelled correctly & in English
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
