import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white' }}>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
