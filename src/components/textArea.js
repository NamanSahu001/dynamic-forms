import React, { useState } from 'react'

export default function TextArea(props) {
  const [text, setText] = useState('Enter Here')

  return (
    <>
      <div className='container mt-5'>
        <h1>
          {props.heading} - {text}
        </h1>

        <div className='form-group'>
          <textarea
            type='text'
            className='form-control my-5 p-5'
            id='textInput'
            placeholder='Type something...'
            value={text}
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
    </>
  )
}
