function Song({ songInfo, delSong }) {
    let songRating = songInfo.rating;
    function starGenerator() {
      let starImgArray = [];
      for (let i = 1; i < songInfo.rating + 1; i++) {
        starImgArray.push(
          <img
            src={require("./Images/star.png")}
            key={i}
            alt="Missing!"
            className="rating-stars"
          />
        );
      }
      return starImgArray;
    }
    let ratingStars = starGenerator(songRating);
    
    return (
      <tr>
        <td className="song-td">{songInfo.song}</td>
        <td className="album-td">{songInfo.album}</td>
        <td className="artist-td">{songInfo.artist}</td>
        <td className="genre-td">{songInfo.genre}</td>
        <td className="rating-td">{ratingStars}</td>
        <td className="del-btn-td">
          <img
            src={require("./Images/pixel_trash.png")}
            onClick={() => {
              delSong(songInfo);
            }}
            className="del-icon"
            alt="Missing!"
          ></img>
        </td>
      </tr>
    );
  }
  
  export default Song;
  