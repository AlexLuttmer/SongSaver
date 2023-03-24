import React from "react";
import InputComponent from "./InputComponent.js";

class InputContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      songTitle: "",
      songAlbum: "",
      songArtist: "",
      songGenre: "",
      songRating: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    this.props.addSong(this.state);
    this.setState({
      songTitle: "",
      songAlbum: "",
      songArtist: "",
      songGenre: "",
      songRating: "",
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <InputComponent
          songInput={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default InputContainer;
