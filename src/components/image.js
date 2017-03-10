import React, { Component } from 'react';

class Image extends Component {

  constructor(props){
    super(props);
    this.status={
      saved:[]
    }
  }

   getUrl(){
       return "https://farm"+
       this.props.photo.farm +
       ".staticflickr.com/" +
       this.props.photo.server +
       "/"+
       this.props.photo.id+
       "_" +
       this.props.photo.secret +
       "_s.jpg";
   }

  render() {
    if(this.props.photo){
          return (
      <div>
      <form action={this.save()}>
       <input type="image" src={this.getUrl()} alt="submit"/>
       </form>
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
