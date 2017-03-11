import React, { Component } from 'react';
import Favoritas from './favoritas';

class Image extends Component {

  constructor(props){
    super(props);
    this.state={
    };
  }

   getUrl(){
       return "https://farm"+this.props.photo.farm +".staticflickr.com/" +this.props.photo.server +"/"+this.props.photo.id+
       "_" +this.props.photo.secret+"_s.jpg";
   }

   saved( ){
        var url=this.getUrl();
        this.props.callbackParent(url);
   }

  render() {
    if(this.props.photo){
          return (
      <div>
       <input type="image" src={this.getUrl()} onClick={() => this.saved()}/>
      </div>
    );
        }else {
          return (
      <div>
      </div>
      );
    }

  }
}

export default Image;
