import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/image';
import Favoritas from './components/favoritas';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
      imagesViolet:[],
      favoritas:[]
    }
  }


  getImages(keyword){
    //se inicializan
    this.state.imagesRed=[]
    this.state.imagesOrange=[]
    this.state.imagesYellow=[]
    this.state.imagesGreen=[]
    this.state.imagesBlue=[]
    this.state.imagesIndigo=[]
    this.state.imagesViolet=[]

    axios.get('/flickr/'+keyword+' red')
    .then(response => {
      this.setState({
            imagesRed: response.data.photos.photo
        });
    })
    .catch(function (error) {
    console.log(error);
    });

        axios.get('/flickr/'+keyword+' orange')
    .then(response => {
      this.setState({
            imagesOrange: response.data.photos.photo
        });
    })
    .catch(function (error) {
    console.log(error);
    });

        axios.get('/flickr/'+keyword+' yellow')
    .then(response => {
      this.setState({
            imagesYellow: response.data.photos.photo
        });
    })
    .catch(function (error) {
    console.log(error);
    });

        axios.get('/flickr/'+keyword+' green')
    .then(response => {
      this.setState({
            imagesGreen: response.data.photos.photo
        });
    })
    .catch(function (error) {
    console.log(error);
    });

            axios.get('/flickr/'+keyword+' blue')
    .then(response => {
      this.setState({
            imagesBlue: response.data.photos.photo
        });
    })
    .catch(function (error) {
    console.log(error);
    });

            axios.get('/flickr/'+keyword+' indigo')
    .then(response => {
      this.setState({
            imagesIndigo: response.data.photos.photo
        });
    })
    .catch(function (error) {
    console.log(error);
    });

            axios.get('/flickr/'+keyword+' violet')
    .then(response => {
      this.setState({
            imagesViolet: response.data.photos.photo
        });
    })
    .catch(function (error) {
    console.log(error);
    });
  }

  onChildChanged(fav){
    var array = this.state.favoritas.slice()
    array.push(fav)
    this.setState({ favoritas : array });
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
              <button className="btn btn-info btn-block" onClick={(evt)=>{this.getImages(document.getElementById("text").value)}}>
              Load rainbow
              </button>
              </div>
          </div>
          </div>
          <div className="col-md-2"></div>
          </div>
          <br></br>
          <br></br>
              <div className="row textFav">
              <p>  </p>
              <p> you can select your favorite photos </p>
              </div>
              <br></br>
              <br></br>
              <div className="row"> 
              <div className="col-md-2"></div>   
              <div className="col-md-1">
              {this.state.imagesRed.map(imagen => {
                return <Image photo={imagen} callbackParent={(url) => this.onChildChanged(url) }/>
              })}
              </div>
              <div className="col-md-1">
              {this.state.imagesOrange.map(imagen => {
                return <Image photo={imagen} callbackParent={(url) => this.onChildChanged(url) }/>
              })}
              </div>
              <div className="col-md-1">
              {this.state.imagesYellow.map(imagen => {
                return <Image photo={imagen} callbackParent={(url) => this.onChildChanged(url) }/>
              })}
              </div>
              <div className="col-md-1">
              {this.state.imagesGreen.map(imagen => {
                return <Image photo={imagen} callbackParent={(url) => this.onChildChanged(url) }/>
              })}
              </div>
              
              <div className="col-md-1">
              {this.state.imagesBlue.map(imagen => {
                return <Image photo={imagen} callbackParent={(url) => this.onChildChanged(url) }/>
              })}
              </div>
              
              <div className="col-md-1">
              {this.state.imagesIndigo.map(imagen => {
                return <Image photo={imagen} callbackParent={(url) => this.onChildChanged(url) }/>
              })}
              </div>

              <div className="col-md-1">
              {this.state.imagesViolet.map(imagen => {
                return <Image photo={imagen} callbackParent={(url) => this.onChildChanged(url) }/>
              })}
              </div>
              <div className="col-md-1 fav">
              {this.state.favoritas.map(text => {
                return <Favoritas url={text}/>
              })}
              </div>
              </div>
      </div>
    );
  }
}

export default App;
