import React, { Component } from 'react';

class Image extends Component {

  constructor(props){
    super(props);
    this.state = {
      url:''
    }
  }

  // postReds(){
  //   this.state.imagesRed.map(function(imagesRed){
  //   return (
  //   <input type="image" src={imagesRed} alt="submit"/>
  //   );
  //   });
  // }

  render() {
    return (
      <div>
      <img src={this.props.url}/>
      // <form action=guarda()>
      //   {postReds()}
      // </form>
      </div>
    );
  }
}

export default Image;
