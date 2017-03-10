import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const URL = 'http://localhost:9000'

class App extends Component {

  constructor(props){
    super(props);
    //"red","orange", "yellow", "green", "blue","indigo", "violet"
    this.state = {
      urlsR:[],
      prueba:['1','2','3','4'],
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
    .then(function (response){ () => {
      this.setState({
            imagesRed: response.data.photos.photo
        });
    },
    console.log(response.data.photos.photo);
    getURL();
    })
    .catch(function (error) {
    console.log(error);
    });
  }

  getURL(){
    var array = this.state.imagesRed;
    var urls = [];
    for(var i=0; i<array.length;i++){
      var obj = array[i];
      var farm = obj.farm;
      var server = obj.server;
      var secret = obj.secret;
      var url ='https://farm'+farm+'.staticflickr.com/'+server+'/'+secret+'.jpg'
      urls.push(url);
    }
    return urls;
  }


  render() {
    return (
      <div>
        <h1> Flickr Rainbow </h1>
        <p> Search for something on Flickr and we will get you a rainbow  of it </p>
        <br></br>
              <input type="text" className="form-control" placeholder="busca tu rainbow"
              onChange={(evt) => this.getImages(evt.target.value)} />

              <p>    {this.state.urlsR.map(function(urlsR, i) {
                    return <h3 key={i}>{urlsR}</h3>
              })}       </p>
      </div>
    );
  }
}

export default App;
