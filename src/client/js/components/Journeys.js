import React, { Component } from 'react';
import request from 'superagent';
import PubSub from "pubsub-js";
import ImageValidation from './ImageValidation.js';


class Journeys extends Component {

  _handleJourneyAttempt(){

  const imgPassengerInput = this.refs.imgPassengerInput.value
  const imgDriverInput = this.refs.imgDriverInput.value
  const component = this


  request
    .post("/journeys")
    .send({imgData:imgPassengerInput })
    .then((serverRes)=>{

      const pictureValidation = serverRes.body
        PubSub.publish("updateAppState", {
          currentJourney : pictureValidation
        })

        console.log(this.props.match.url);

        if(this.props.match.url === "/passenger/dash"){
           component.props.history.push("/driver/service")
        }

        if(this.props.match.url === "/driver/service"){
          component.props.history.push("/passenger/dash")
        }
    })

    .catch((e)=>{
      console.log(e);
      component.refs.NotificationSystem.addNotification({
        title: 'Unauthorized',
        message: 'your image was not validated ',
        level: 'error'
      })
    })
  }

  render(){
    console.log(this.props);


    return (

      <div className="transactionview">
        <h2> Tu viaje </h2>
      </div>  

    );
  }
}


export default Journeys;
