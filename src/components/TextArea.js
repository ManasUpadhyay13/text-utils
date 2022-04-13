import React, { useState } from 'react'
let count = 0;

export default function TextArea(props) {
    const [text, setText] = useState("");

    const fucn = () => {
        setText(text.toUpperCase())
    }
    const handleOnChange = (e) => {
        if (e.target.value === '') {
            count = 0;
        }
        else {
            count = text.split(' ').length
        }
        setText(e.target.value)
    }
    const convLower = () => {
        setText(text.toLowerCase())
    }

    const clear = () => {
        setText('');
        count = 0;
    }

   
    return (
        <>
            <div>
                <div className={`mb-3  text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <h4>{props.heading}</h4>
                    <label for="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} style={{
                        backgroundColor: props.mode === 'light' ? 'white' : 'grey',
                        color: props.mode === 'light' ? 'black' : 'white'
                    }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary " onClick={fucn}  >Convert to UpperCase</button>
                <button className="btn btn-primary  mx-4" onClick={convLower}>Convert to LowerCase</button>
                <button className="btn btn-primary  mx-2" onClick={clear}>Clear Text</button>
                

            </div>
            <div className={`container my-2  text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>Your text summary is written here</h1>
                <p>{count} words and {text.length} characters</p>
            </div>
        </>
    )
}
