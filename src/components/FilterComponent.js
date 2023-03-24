function FilterComponent({ filterStatus, setFilters }) {
  return (
    <div className="filter-container">
      <label className="song-filters">
        <input
          type="checkbox"
          name="genre"
          value="HipHop"
          onChange={setFilters}
          checked={
            filterStatus.find((genre) => {
              return genre.name === "HipHop";
            }).status
          }
        />
        HipHop
      </label>

      <label className="song-filters">
        <input
          type="checkbox"
          name="genre"
          value="EDM"
          onChange={setFilters}
          checked={
            filterStatus.find((genre) => {
              return genre.name === "EDM";
            }).status
          }
        />
        EDM
      </label>

      <label className="song-filters">
        <input
          type="checkbox"
          name="genre"
          value="Soul/R&B"
          onChange={setFilters}
          checked={
            filterStatus.find((genre) => {
              return genre.name === "Soul/R&B";
            }).status
          }
        />
        Soul/R&B
      </label>

      <label className="song-filters">
        <input
          type="checkbox"
          name="genre"
          value="Rock/Metal"
          onChange={setFilters}
          checked={
            filterStatus.find((genre) => {
              return genre.name === "Rock/Metal";
            }).status
          }
        />
        Rock/Metal
      </label>

      <label className="song-filters">
        <input
          type="checkbox"
          name="genre"
          value="Jazz"
          onChange={setFilters}
          checked={
            filterStatus.find((genre) => {
              return genre.name === "Jazz";
            }).status
          }
        />
        Jazz
      </label>

      <label className="song-filters">
        <input
          type="checkbox"
          name="genre"
          value="Classical"
          onChange={setFilters}
          checked={
            filterStatus.find((genre) => {
              return genre.name === "Classical";
            }).status
          }
        />
        Classical
      </label>
    </div>
  );
}

export default FilterComponent;
