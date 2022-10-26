import React from "react";

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank">
                🗣 Listen</a>
            <br />
            {props.phonetic.text}
        </div>
    );
}