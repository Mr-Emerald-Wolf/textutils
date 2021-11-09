import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUp = () => {
        //console.log("Uppercase was clicked: "+ text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLow = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleChange = (event) => {
        //console.log("Changing text");
        setText(event.target.value)
    }
    const handleClear = () => {
        let newtext = "";
        setText(newtext);
    }
    const [text, setText] = useState("Formatted text"); //Hooks like use State are used to update page in real time without reload
    //To use hook: Make new array -> const [ variableTobeUpdated , FunctionUsedToUpdateVariable ] = useState("Default Value of Variable");
    let words = text.split(" ").length;
    let all_char = text.length;
    let minutes = words * 0.008
    return (
        <div className="container">
            <div className={`container m-3 text-${props.textTheme}`}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    
                    <textarea className="form-control" id="mybox" rows="5" onChange={handleChange}></textarea>
                </div>



                <button className={`btn btn-${props.textTheme} m-1`} onClick={handleUp}>{props.button}</button>
                <button className={`btn btn-${props.textTheme} m-1`} onClick={handleLow}>Convert to Lowercase</button>
                <button className={`btn btn-${props.textTheme} m-1`} onClick={handleClear}>Clear Text</button>


                <div className="mb-3 p-1">
                    <h1>Edited text here:</h1>
                    <textarea className="form-control" rows="5" value={text} readOnly></textarea>
                </div>

            </div>
            <div className={`container-fluid m-3 text-${props.textTheme}`}>
                <h1>Your text summary</h1>
                <p>Words: {words} Characters: {all_char} Minutes Read:{minutes}</p>
            </div>
        </div>
    )
}
