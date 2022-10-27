import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {

        setResults(response.data[0]);
    }
    function handlePhotoResponse(response) {

        setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
        const photoKey = "563492ad6f917000010000017a183a1fe82c4979919ea3394732c0c2";
        let photoUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { "Authorization": `Bearer ${photoKey}` };
        axios.get(photoUrl, { headers: headers }).then(handlePhotoResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>What word do you want to look up?</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeywordChange} placeholder="Type a word..." defaultValue={props.defaultKeyword} />
                    </form>
                    <div className="hint">Suggested words: anonymous, chocolate, emoji, menu, poltergeist...</div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return 'Loading...';
    }




}