function InputComponent({ songInput, handleChange, handleSubmit }) {
  return (
    <form className="song-form">
      <input
        name="songTitle"
        type="text"
        value={songInput.songTitle}
        className="song-inputs"
        onChange={handleChange}
        placeholder="Title"
      />

      <input
        name="songAlbum"
        type="text"
        value={songInput.songAlbum}
        className="song-inputs"
        onChange={handleChange}
        placeholder="Album"
      />

      <input
        name="songArtist"
        type="text"
        value={songInput.songArtist}
        className="song-inputs"
        onChange={handleChange}
        placeholder="Artist"
      />

      <br></br>

      <select
        name="songGenre"
        className="song-inputs"
        onChange={handleChange}
        value={songInput.songGenre}
      >
        <option>... Select Genre ...</option>
        <option value="HipHop">HipHop</option>
        <option value="EDM">EDM</option>
        <option value="Soul/R&B">Soul/R&B</option>
        <option value="Rock/Metal">Rock/Metal</option>
        <option value="Jazz">Jazz</option>
        <option value="Classical">Classical</option>
      </select>

      <select
        name="songRating"
        className="song-inputs"
        onChange={handleChange}
        value={songInput.songRating}
      >
        <option>... Select Rating ...</option>
        <option value={1}>1 Star</option>
        <option value={2}>2 Stars</option>
        <option value={3}>3 Stars</option>
        <option value={4}>4 Stars</option>
        <option value={5}>5 Stars</option>
      </select>

      <button className="add-btn" onClick={handleSubmit}>
        Add song
      </button>
    </form>
  );
}

export default InputComponent;
