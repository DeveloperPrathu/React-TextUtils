import React, { useState } from 'react'

export default function About() {

  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  })

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  let toggleStyle = () => {
    if (myStyle.color === 'white'){
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        border: '2px solidd white'
      })
      setBtnText("Enable Dark Mode")
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setBtnText("Enable Light Mode")
    }
  }

  return (
    <div className='container my-5' style={myStyle}>
      <div className="jumbotron">
        <h1 className="">About us!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <button className="btn btn-primary btn-lg my-3" onClick={toggleStyle}>{btnText}</button>
      </div>
    </div>
  )
}
