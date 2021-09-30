import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState("");


    const handleUpClick = () => {
        let convertedText = text.toUpperCase();
        setText(convertedText);
    }

    const handleLoClick = () => {
        let convertedText = text.toLowerCase();
        setText(convertedText);
    }

    const handleCapitalize = () => {
        let convertedText = text.charAt(0).toUpperCase() + text.slice(1, text.length);
        setText(convertedText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    return (

        <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}  bg-${props.mode}`}>
            <div className="container" >
                <h2 id="emailHelp" className="heading">{props.heading}</h2>
                <textarea type="email" className="form-control" value={text} rows="8" onChange={handleOnChange} autoFocus placeholder="Enter your text here" style={{ backgroundColor: props.mode === 'dark' ? '#495057' : 'white' }} />
                <button className="btn btn-primary my-4 mx-4" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary my-4 mx-4" onClick={handleLoClick}>Lowercase</button>
                <button className="btn btn-primary my-4 mx-4" onClick={handleCapitalize}>Capitalise</button>
            </div >
            <div className="summary">
                <h2>Summary</h2>
                <p>Number of words : {text.split(" ").length}</p>
                <p>Number of characters : {text.length}</p>
                <p>Average read time : {0.008 * text.split(" ").length} minutes</p>
            </div>
        </div>

    )
}