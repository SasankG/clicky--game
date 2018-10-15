import React, { Component } from 'react';
import NavBar from "./components/nav";
import Header from "./components/header";
import Main from "./components/main";
import Images from "./components/images";
import image from "./components/image.json"

import Argentina from "./images/flag-of-Argentina.png"
import Australia from "./images/flag-of-Australia.png"
import Austria from "./images/flag-of-Austria.png"
import Cambodia from "./images/flag-of-Cambodia.png"
import Canada from "./images/flag-of-Canada.png"
import northKorea from "./images/flag-of-Korea-North.png"
import Malaysia from "./images/flag-of-Malaysia.png"
import Mexico from "./images/flag-of-Mexico.png"
import Micronesia from "./images/flag-of-Micronesia.png"
import Nepal from "./images/flag-of-Nepal.png"
import newZealand from "./images/flag-of-New-Zealand.png"
import unitedStates from "./images/flag-of-United-States-of-America.png"


import './App.css'


class App extends Component {

  state = {
    picked: [],
    correct: 0,
    score: 0,
    message: "click any flag to begin!"
  };

  mixArray = (arry) => {
    let imgAry = image;

    for (let i = imgAry.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgAry[i], imgAry[j]] = [imgAry[j], imgAry[i]];
    }
    return imgAry
  }

  picking = (name) => {
    let pickImg = this.state.picked;

    if (pickImg.indexOf(name) === -1) {
      this.setState({
        picked: pickImg.concat(name),
        correct: this.setState.correct + 1,
        score: this.state.score + 1,
        message: "Nice!"
      })
      this.mixArray();
    } else {
      this.setState({
        message: "Wrong! sorry you've lost!",
        correct: 0,
        picked: []
      })
    }
  }

  switchImg = (name) => {

    switch (name) {
      case "Argentina":
        return `${Argentina}`
      case "Australia":
        return `${Australia}`
        case "Austria":
        return `${Austria}`
        case "Cambodia":
        return `${Cambodia}`
        case " Canada":
        return `${Canada}`
        case "North Korea":
        return `${northKorea}`
        case "Malaysia":
        return `${Malaysia}`
        case "Mexico":
        return `${Mexico}`
        case "Micronesia":
        return `${Micronesia}`
        case "Nepal":
        return `${Nepal}`
        case "New Zealand":
        return `${newZealand}`
        case "United States":
        return `${unitedStates}`
        default:
        return `${Argentina}`
    }
  }

  render() {

    return(
      <div>
        <NavBar correct={this.state.correct} score = {this.state.score} message = {this.state.message}/>
        <Header/>
        <Main>
          {this.mixArray(image).map(iMg => (
            <Images src={this.switchImg(iMg.name)} name={iMg.name} key = {iMg.name} picking = {this.picking} />
          ))}
        </Main>
      </div>
    )
  }


}

export default App;