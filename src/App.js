import React, { Component } from 'react';
import './App.css';
import Square from './Square.js';
import Modal from './Modal.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      modalToShow: ''
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


  handleShowModal = (id) => {
    this.setState({ modalToShow: id })
  }

  handleCloseModal = () => {
    this.setState({modalToShow: null })
  }

  getAllPhotos = (photosArray) => {
    let tempArray = [];
    for (let i = 0; i < photosArray.length; i++) {
      //console.log(photosArray[i])
      let add = photosArray[i].download_url
      tempArray.push(<Square key={photosArray[i].id} handleShowModal={this.handleShowModal} pic={photosArray[i]} bg={`url(${add})`} />)
    }
    return tempArray;
  }

  render() {
    const modalObj = this.state.photos.filter(modal => modal.id === this.state.modalToShow)

    console.log(modalObj)
    console.log(this.state.modalToShow)

    let allPhotos = "";

    if (this.state.photos.length) {
      allPhotos = this.getAllPhotos(this.state.photos)
    }

    //console.log(allPhotos)
    return (
      <body>
        <h1>Click a square</h1>
        <div className='section'>
          {allPhotos}
        </div>
         {/* conditional here for modal */}
         <div>
           {this.state.modalToShow ?<Modal content={modalObj} handleCloseModal= {this.handleCloseModal} /> : null}

         </div>
      </body>
    )
  }
}

export default App;
