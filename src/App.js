import React, { Component } from 'react';
import './App.css';
import Square from './Square.js';



let squares = document.querySelectorAll('.square');
console.log(squares)
// let modal = document.querySelector('.modal');
// let modalClose = document.querySelector('.close');
// let modTop = document.querySelector('.modTop');
// let modBtm = document.querySelector('.modBtm');

// modalClose.addEventListener('click', function () {
//   modal.style.display = 'none';
// })

// for (let j = 0; j < squares.length; j++) {
//   squares[j].addEventListener('click', function () {
//     //console.log(this.style)
//     modal.style.display = 'block';
//     modTop.style.background = this.style.background
//     modTop.style.backgroundSize = 'cover'
//     modBtm.innerText = "download me"
//   })
// }

function getAllPhotos(photosArray) {
  let tempArray = [];
  for (let i = 0; i < photosArray.length; i++) {
    //console.log(photosArray[i].download_url)
    let add = photosArray[i].download_url
    tempArray.push(<Square pic={photosArray[i]} />)
    //squares[i].style.background = `url(${add})`
    //console.log(squares[i].style)
  }
  return tempArray;
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    const url = 'https://picsum.photos/v2/list?limit=15';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        this.setState({ photos: data })
      })
  }

  render() {
    //console.log(this.state.photos[0])
    let allPhotos = "";

    if (this.state.photos.length) {
      allPhotos = getAllPhotos(this.state.photos)
    }

    //console.log(allPhotos)
    return (
      <body>
        <h1>Alright Alright Alriiiight</h1>
        <div className='section'>
          {allPhotos}
        </div>
        {/* <Square pic = {this.state}/> */}
      </body>
    )
  }
}

export default App;
