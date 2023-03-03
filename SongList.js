import Song from "./Song.js"

function SongList({allSongs}) {

    let listedSongs = allSongs.map((song) => {
        return <Song key={song.id} songInfo={song}/>
    })

    return (
        <tbody>
            {listedSongs}
        </tbody>  
    )
}

export default SongList