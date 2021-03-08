import React, { Component } from 'react';
import './App.css';
import Square from './Square.js';


function getAllPhotos(photosArray){
  let tempArray = [];
  for (let i = 0; i < photosArray.length; i ++) {
    console.log(photosArray[i])
    tempArray.push(<Square pic = {photosArray[i]}/>)
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

  componentDidMount(){
    const url = 'https://picsum.photos/v2/list?limit=15';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        this.setState({photos:data})
      })
  }

  render () {
    //console.log(this.state.photos[0])
    let allPhotos = "";

    if (this.state.photos.length) {
      allPhotos=getAllPhotos(this.state.photos)
    }

console.log(allPhotos)
    return (
      <div>
        <h1>alright alright alriiiight</h1>
        {allPhotos}
      </div>
    )
  }
}

export default App;
