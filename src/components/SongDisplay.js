import React from "react";
import FilterComponent from "./FilterComponent";
import SongTable from "./SongTable.js";

class SongDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      filterStatus: [
        { name: "HipHop", status: true },
        { name: "EDM", status: true },
        { name: "Soul/R&B", status: true },
        { name: "Rock/Metal", status: true },
        { name: "Jazz", status: true },
        { name: "Classical", status: true },
      ],
    };
    this.setFilters = this.setFilters.bind(this);
  }

  setFilters(event) {
    let newFilters = this.state.filterStatus.map((filter) => {
      if (filter.name === event.target.value) {
        return {
          name: filter.name,
          status: !filter.status,
        };
      } else {
        return filter;
      }
    });
    this.setState({ filterStatus: newFilters });
  }

  render() {
    let currentFilters = this.state.filterStatus.filter((filter) => {
      if (filter.status) {
        return filter;
      } else {
        return null;
      }
    });

    let filteredSongs = this.props.sortedSongs.filter((song) => {
      if (
        currentFilters
          .map((filter) => {
            return filter.name;
          })
          .includes(song.genre)
      ) {
        return song;
      } else {
        return null;
      }
    });

    return (
      <div>
        <FilterComponent
          filterStatus={this.state.filterStatus}
          setFilters={this.setFilters}
        />

        <SongTable
          filteredSongs={filteredSongs}
          delSong={this.props.delSong}
          setSort={this.props.setSort}
          currentSort={this.props.currentSort}
        />
      </div>
    );
  }
}

export default SongDisplay;
