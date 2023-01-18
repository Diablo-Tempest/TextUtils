import React, {useState} from "react";
import '../styles/TextForm.css';
export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCase", 'success')
    }
    const handleLoClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase", 'success')
    }
    const handleClClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared", 'success')
    }
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard", 'success')
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed Successfully", 'success')
    }

    const [text, setText] = useState('');
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
        // props.showAlert("Text Is written", 'success')
    }
    // text = "new Text" /*Wrong way*/
    // setText("new Text"); /*Correct way*/

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Enter Text Here" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white' , color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear All</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3 " style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            {/* <p>{text.split(" ").length} Words</p> */}
            <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} Words</p>
            <p>{text.length} Characters</p>
            <p>{0.008 * text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} Minutes To Read</p>
            <h3>Preview</h3>
            <p>{text}</p>

        </div>
        </>
    );
}
