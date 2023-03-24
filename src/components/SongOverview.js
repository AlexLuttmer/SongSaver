import React from "react";
import InputContainer from "./InputContainer.js";
import SongDisplay from "./SongDisplay.js";

class SongOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allSongs: [
        {
          id: 1,
          song: "Strode Rode",
          album: "Saxophone Colossus",
          artist: "Sonny Rollins",
          genre: "Jazz",
          rating: 4,
        },
        {
          id: 2,
          song: "Veteran - VIP",
          album: "Veteran",
          artist: "Bou & Trigga",
          genre: "EDM",
          rating: 5,
        },
        {
          id: 3,
          song: "Gangsta Gangsta",
          album: "Straight Outta Compton",
          artist: "N.W.A.",
          genre: "HipHop",
          rating: 5,
        },
        {
          id: 4,
          song: "Nocturne 3 in B, Op.9",
          album: "Chopin: The Nocturnes",
          artist: "Frederic Chopin/Claudio Arrau",
          genre: "Classical",
          rating: 5,
        },
        {
          id: 5,
          song: "The Pot",
          album: "10,000 Days",
          artist: "TOOL",
          genre: "Rock/Metal",
          rating: 5,
        },
        {
          id: 6,
          song: "What'd I Say",
          album: "Etta James Rocks The House",
          artist: "Etta James",
          genre: "Soul/R&B",
          rating: 4,
        },
        {
          id: 7,
          song: "Mediocre Song",
          album: "Mediocre Album",
          artist: "Mediocre Artist",
          genre: "Soul/R&B",
          rating: 2,
        },
        {
          id: 8,
          song: "Atrocious Song",
          album: "Atrocious Album",
          artist: "Atrocious Artist",
          genre: "HipHop",
          rating: 1,
        },
      ],
      currentSort: "song",
    };
    this.addSong = this.addSong.bind(this);
    this.delSong = this.delSong.bind(this);
    this.setSort = this.setSort.bind(this);
    this.sortSongs = this.sortSongs.bind(this);
  }

  addSong({ songTitle, songAlbum, songArtist, songGenre, songRating }) {
    let idArray = this.state.allSongs.map((song) => {
      return song.id;
    });
    let highestId = Math.max(...idArray);
    if (
      songTitle === "" ||
      songAlbum === "" ||
      songArtist === "" ||
      songGenre === "" ||
      songRating === ""
    ) {
      alert("Please fill out all of the song data!");
      return;
    } else {
      this.setState({
        allSongs: [
          ...this.state.allSongs,
          {
            id: highestId + 1,
            song: songTitle,
            album: songAlbum,
            artist: songArtist,
            genre: songGenre,
            rating: parseInt(songRating),
          },
        ],
      });
    }
  }

  delSong({ id }) {
    let newSongs = this.state.allSongs.filter((song) => {
      return song.id !== id;
    });
    this.setState({ allSongs: newSongs });
  }

  setSort(event) {
    let sortingCriterium = event.target.textContent.toLowerCase();
    this.setState({ currentSort: sortingCriterium });
  }

  sortSongs() {
    let sortingCriterium = this.state.currentSort;
    let sortedSongs = [...this.state.allSongs].sort((a, b) => {
      if (sortingCriterium === "rating") {
        let songA = a[sortingCriterium];
        let songB = b[sortingCriterium];
        if (songA < songB) {
          return 1;
        } else if (songA > songB) {
          return -1;
        } else {
          return 0;
        }
      } else {
        let songA = a[sortingCriterium].toLowerCase();
        let songB = b[sortingCriterium].toLowerCase();
        if (songA > songB) {
          return 1;
        } else if (songA < songB) {
          return -1;
        } else {
          return 0;
        }
      }
    });
    return sortedSongs;
  }

  render() {
    let sortedSongs = this.sortSongs(this.state.allSongs);
    return (
      <div className="song-overview">
        <div className="page-banner">
          <h1 className="page-title">Song Saver App</h1>
          <img
            src={require("./Images/music_skull.png")}
            className="skull-icon"
            alt="Missing!"
          ></img>
        </div>

        <InputContainer addSong={this.addSong} />

        <SongDisplay
          sortedSongs={sortedSongs}
          currentSort={this.state.currentSort}
          delSong={this.delSong}
          setSort={this.setSort}
        />
      </div>
    );
  }
}

export default SongOverview;
