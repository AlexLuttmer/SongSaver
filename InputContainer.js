import React from 'react';
import InputComponent from "./InputComponent.js"

class InputContainer extends React.Component {
    constructor () {
        super ()
        this.state = {
            songTitle: "",
            songArtist: "",
            songGenre: "",
            songRating: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        // console.log(this.state)
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit(event) {
        this.props.addSong(this.state)
        // this.setState({ 
        //     songTitle: "",
        //     songArtist: "",
        //     songGenre: "",
        //     songRating: ""
        // })
        // console.log(event)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                {/* <p>Song Title state:{this.state.songTitle}</p>
                <p>Song Artist state:{this.state.songArtist}</p>
                <p>Song Genre state:{this.state.songGenre}</p>
                <p>Song Rating state:{this.state.songRating}</p> */}
                <InputComponent 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    songInfo={this.state}
                />
            </div>
        )
    }
}

export default InputContainer