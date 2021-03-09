import React from 'react';
// import App from './App';
import './App.css';

function Modal(props) {
  console.log(props.content)

  return (
    <section className='modContainer'>
      <div className="modal" onClick={() => props.handleCloseModal()}>
        <h1>{props.content[0].author}</h1>
        <div className="modTop">
          <img src={props.content[0].download_url} />
        </div>
        <div className="modBtm">...</div>
        <h1>{props.content[0].author}</h1>
      </div>
    </section>
  )
}



export default Modal;