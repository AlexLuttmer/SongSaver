import React from 'react';
import InputContainer from './InputContainer.js';
import SongList from "./SongList.js"

class SongOverview extends React.Component {
    constructor() {
        super()

    this.state = {
        allSongs: [
            {   
                id: 1,
                title: "Fuck ya life", 
                artist: "Jedi Mind Tricks",
                genre: "HipHop",
                rating: "5 Stars"
            },
            {   
                id: 2,
                title: "If 6 was 9", 
                artist: "Jimi Hendrix",
                genre: "Rock",
                rating: "5 Stars"
            },
            {   
                id: 3,
                title: "Nou en", 
                artist: "Rico & Sticks",
                genre: "HipHop",
                rating: "5 Stars"
            }
        ]
    }
    this.addSongToOverview = this.addSongToOverview.bind(this)
}

addSongToOverview ({songTitle, songArtist, songGenre, songRating}) {
    console.log("addSongToOverview firing!")
    this.setState({
        allSongs:[
        ...this.state.allSongs,
        {id: this.state.allSongs.length + 1,
        title: songTitle,
        artist: songArtist,
        genre: songGenre,
        rating: songRating}
        ]
    })
}

render() { 
    return (
        <div>
            <InputContainer addSong={this.addSongToOverview}/>
            <h3>Song Overview</h3>
            <table className="song-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                    <SongList 
                    allSongs={this.state.allSongs}
                    />
            </table>
        </div>
    )
}

}

export default SongOverview;

