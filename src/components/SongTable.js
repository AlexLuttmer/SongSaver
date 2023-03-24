import SongList from "./SongList.js";

function SongTable({ filteredSongs, delSong, setSort, currentSort }) {
  function getHeaderClass(selectedSort) {
    if (selectedSort === "genre" && selectedSort === currentSort) {
      return "header-selected genre-th";
    } else if (selectedSort === "genre") {
      return "header-normal genre-th";
    } else if (selectedSort === "rating" && selectedSort === currentSort) {
      return "header-selected rating-th";
    } else if (selectedSort === "rating") {
      return "header-normal rating-th";
    } else if (selectedSort === currentSort) {
      return "header-selected";
    } else {
      return "header-normal";
    }
  }

  return (
    <table className="song-table">
      <thead>
        <tr>
          <th onClick={setSort} className={getHeaderClass("song")}>
            Song
          </th>
          <th onClick={setSort} className={getHeaderClass("album")}>
            Album
          </th>
          <th onClick={setSort} className={getHeaderClass("artist")}>
            Artist
          </th>
          <th onClick={setSort} className={getHeaderClass("genre")}>
            Genre
          </th>
          <th onClick={setSort} className={getHeaderClass("rating")}>
            Rating
          </th>
          <th className="del-btn-th"></th>
        </tr>
      </thead>

      <SongList filteredSongs={filteredSongs} delSong={delSong} />
    </table>
  );
}

export default SongTable;
