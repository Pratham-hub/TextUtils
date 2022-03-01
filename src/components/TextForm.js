import React, { useState } from "react";

console.log();

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text = "new text" // Wrong way to change the text.
  // setText = "new text" // Right way to change the text.
  const handleUpClick = () => {
    console.log("Uppercase button was clicked.");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase!', 'success');
  };
  const handleOnChange = (event) => {
    console.log("On Change was looked after.");
    setText(event.target.value); //Ye text ki value wo set kardega jo bhi aamp textarea mai type karoge.
  };
  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert('Converted to Lowercase!', 'success');
  };
  const handleClearText = () => {
    setText("");
    props.showAlert('Text Cleared!', 'success');
  };
  const copyText = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    document.getSelection().removeAllRanges();
    props.showAlert('Copied to Clipboard!', 'success');
  };
  //   const extractDigits = ()=>{
  //       let newText =
  //   };
  return (
    <>
      <div
        className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h2 style={{ color: props.mode === "light" ? "black" : "white"}}>
          {props.heading}
        </h2>
        <div
          className="mb-3"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          {/* <label for="myBox" className="form-label">
            Text
          </label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "#e1e5eb" : "#292b2e",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length===0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to UPPERCASE
        </button>
        <button
          disabled={text.length===0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length===0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length===0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={copyText}
        >
          Copy Text
        </button>
        {/* <button className="btn btn-primary-clearText" onClick={extractDigits}>
          Extract Digits
        </button> */}
      </div>

      <div
        className="container my-30"
        style={{ color: props.mode === "light"?"black":"white" }}
      >
        <h2 style={{ color: props.mode === "light"?"black":"white" }}>
          Your Text summary
        </h2>
        <p style={{ color: props.mode === "light"?"black":"white" }}> {text.split(" ").filter((element)=>{return element.length!==0}).length} Words, {text.length} Characters </p>
        <p style={{ color: props.mode === "light"?"black":"white" }}>
          {/* {text.split(" ").length * 0.008} minutes of read for Slow readers.{" "}
          <br /> */}
          {text.length>0? text.split(" ").length*0.008 +" minutes of read": "0 Minutes of read for Slow readers." }
          <br />
          {/* {text.split(" ").length * 0.006} minutes of read for Intermidiate readers.
          <br /> */}
          {text.length>0? text.split(" ").length*0.006 +" minutes of read": "0 Minutes of read for Intermidiate readers." }
          <br />
          {/* {text.split(" ").length * 0.004} minutes of read for Fast readers. */}
          {text.length>0? text.split(" ").length*0.004 +" minutes of read": "0 Minutes of read for Fast readers." }
        </p>
      </div>

      <div>
        <h2 style={{ color: props.mode === "light"?"black":"white" }}>
          Summary
        </h2>
        <p style={{ color: props.mode === "light"?"black":"white" }}>{text.length>0?text: 'Enter Something To Preview It Here'}</p>
      </div>
    </>
  );
}
