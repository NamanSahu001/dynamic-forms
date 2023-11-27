import React, { useState } from 'react'

export default function TextArea(props) {
  const [text, setText] = useState('Enter Here')

  return (
    <>
      <div className='container mt-5'>
        <h1>{props.heading}</h1>

        <div className='form-group'>
          <textarea
            type='text'
            className='form-control my-5 p-5'
            id='textInput'
            placeholder='Type something...'
            value={text}
            rows='8'
            onChange={(event) => {
              setText(event.target.value)
            }}
            required
          />
        </div>
        <button
          className='btn btn-primary'
          onClick={() => {
            setText(text.toUpperCase())
          }}
        >
          Convert to Uppercase
        </button>
        <button
          className='btn btn-primary mx-5'
          onClick={() => {
            setText(text.toLowerCase())
          }}
        >
          Convert to Lowercase
        </button>
      </div>
      <div className='container my-5'>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(' ').length} Words and {text.length} Characters
        </p>
        <p>{text.split(' ').length * 0.008} minutes read</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
