import React from 'react';
// import App from './App';
import './Square.css';

function Square(props) {
  const squareStyles = {
    background: props.bg,
    height: "200px",
    width: "200px"
  }
  //console.log(props.pic.id)
  return(
    <div onClick={()=>props.handleShowModal(props.pic.id)} className='square' style={squareStyles}>
      {/* <h6>this will be a square {''}</h6> */}
    </div>
  )
}






export default Square;