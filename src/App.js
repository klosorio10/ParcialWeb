import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/image';
import ReactDOM from 'react-dom';
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
    axios.get(URL+'/flickr/'+keyword+' red')
    .then(response => {
      this.setState({
            imagesRed: response.data.photos.photo
        });
    })
    .catch(function (error) {
    console.log(error);
    });

        axios.get(URL+'/flickr/'+keyword+' orange')
    .then(response => {
      this.setState({
            imagesOrange: response.data.photos.photo
        });
    })
    .catch(function (error) {
    console.log(error);
    });

        axios.get(URL+'/flickr/'+keyword+' yellow')
    .then(response => {
      this.setState({
            imagesYellow: response.data.photos.photo
        });
    })
    .catch(function (error) {
    console.log(error);
    });

        axios.get(URL+'/flickr/'+keyword+' green')
    .then(response => {
      this.setState({
            imagesGreen: response.data.photos.photo
        });
    })
    .catch(function (error) {
    console.log(error);
    });

            axios.get(URL+'/flickr/'+keyword+' blue')
    .then(response => {
      this.setState({
            imagesBlue: response.data.photos.photo
        });
    })
    .catch(function (error) {
    console.log(error);
    });

            axios.get(URL+'/flickr/'+keyword+' indigo')
    .then(response => {
      this.setState({
            imagesIndigo: response.data.photos.photo
        });
    })
    .catch(function (error) {
    console.log(error);
    });

            axios.get(URL+'/flickr/'+keyword+' violet')
    .then(response => {
      this.setState({
            imagesViolet: response.data.photos.photo
        });
    })
    .catch(function (error) {
    console.log(error);
    });
  }


  render() {
    return (
      <div>
      <div className="row"> 
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h1> Flickr Rainbow </h1>
        <p> Search for something on Flickr and we will get you a rainbow  of it </p>

        <br></br>
              <input type="text" id="text" className="form-control" placeholder="busca tu rainbow"/>
              <br></br>
              <div className="row">
              <div className="col-md-2"></div>
             <div className="col-md-8">
              <button className="btn btn-info btn-block " onClick={(evt)=>{this.getImages(document.getElementById("text").value)}}>
              cargar fotos
              </button>
              </div>

          </div>
          </div>
          <div className="col-md-2"></div>
          </div>

              <div className="row"> 
              <div className="col-md-2"></div>   
              <div className="col-md-1">
              {this.state.imagesRed.map(imagen => {
                return <Image photo={imagen}/>
              })}
              </div>
              <div className="col-md-1">
              {this.state.imagesOrange.map(imagen => {
                return <Image photo={imagen}/>
              })}
              </div>
              <div className="col-md-1">
              {this.state.imagesYellow.map(imagen => {
                return <Image photo={imagen}/>
              })}
              </div>
              <div className="col-md-1">
              {this.state.imagesGreen.map(imagen => {
                return <Image photo={imagen}/>
              })}
              </div>
              
              <div className="col-md-1">
              {this.state.imagesBlue.map(imagen => {
                return <Image photo={imagen}/>
              })}
              </div>
              
              <div className="col-md-1">
              {this.state.imagesIndigo.map(imagen => {
                return <Image photo={imagen}/>
              })}
              </div>

              <div className="col-md-1">
              {this.state.imagesViolet.map(imagen => {
                return <Image photo={imagen}/>
              })}
              </div>
              </div>

      </div>
    );
  }
}

export default App;
