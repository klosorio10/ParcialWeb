import React, { Component } from 'react';
import Buscador from './components/buscador';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const URL = 'http://localhost:9000'

class App extends Component {

  constructor(props){
    super(props);
    //"red","orange", "yellow", "green", "blue","indigo", "violet" 
    this.state = {
      imagesRed:[],
      imagesOrange:[],
      imagesYellow:[],
      imagesGreen:[],
      imagesBlue:[],
      imagesIndigo:[],
      imagesViolet:[]
    }
  }


  getImages(keyword){
    axios.get(URL+'/flickr/'+keyword+',red')
    .then(function (response){
    //  this.setState(() => {
    //  this.state.imagesRed = response.data
    //  }
    //);
    console.log(response.data);
    })
    .catch(function (error) {
    console.log(error);
    });
  }


  render() {
    return (
      <div>
        <h1> Flickr Rainbow </h1>
        <p> Search for something on Flickr and we will get you a rainbow  of it </p>
        <br></br>
        <div className="form-control">
              <input type="text" onChange={(evt) => this.getImages(evt.target.value)} />
        </div>
      </div>
    );
  }
}

export default App;
