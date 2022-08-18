import React, { Component } from "react";
import "tachyons";

import Particles from "./components/Particles/Particles";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";

// const Clarifai = require('clarifai');

import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "fe9776afa6ff4af09726d0fa8469fddc",
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onSubmit = () => {
    console.log("click");
    app.models
      .predict(
        "53e1df302c079b3db8a0a36033ed2d15",
        "https://st.depositphotos.com/1008939/1926/i/600/depositphotos_19266867-stock-photo-happy.jpg"
      )
      .then(
        function (response) {
          console.log(response);
        },
        function (err) {}
      );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onSubmit}
        />

        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
