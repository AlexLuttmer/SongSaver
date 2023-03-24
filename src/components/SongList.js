import Song from "./Song.js";

function SongList({ filteredSongs, delSong }) {
  let songsToDisplay = filteredSongs.map((song) => {
    return <Song key={song.id} songInfo={song} delSong={delSong} />;
  });

  return <tbody className="song-list">{songsToDisplay}</tbody>;
}

export default SongList;
