import React, { Component } from 'react';
import request from 'superagent';
import NotificationSystem from 'react-notification-system';
import Webcam from "react-webcam";
import {uploadFile} from '../services/filestackService.js'

class ImageValidation extends React.Component {
  constructor(...args){
    super(...args)
    this.state = {
      imgData: ""
    }
  }

  _capture () {
    console.log(this.refs.camera.getScreenshot)
    const imageSrc = this.refs.camera.getScreenshot();
    console.log('logging image')
    console.log(imageSrc)
    this.setState({
      imgData : imageSrc
    })
  }

  _handleSubmit(evt){
     uploadFile(this.state.imgData)
     .then( servicesRes =>{
       console.log('file from filestack?');
       console.log(servicesRes);
     })
   }


  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    }

    let btnEl

    if (this.state.imgData.length > 0){
      btnEl = <button onClick={ ()=> { this._handleSubmit()} }>
        Submit Image for Driver Review
      </button>
    }

    return (
      <div>
        <Webcam
          audio={false}
          height={300}
          ref="camera"
          screenshotFormat="image/jpeg"
          width={300}
          videoConstraints={videoConstraints}
        />
        <button onClick={ () => this._capture() }>Capture photo</button>

        <img src={this.state.imgData}/>
        <hr/>
        {btnEl}
      </div>
    );
  }
}



export default ImageValidation;
