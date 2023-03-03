function Song ({songInfo}) {
    return (
        <tr>
            <td>{songInfo.title}</td>
            <td>{songInfo.artist}</td>
            <td>{songInfo.genre}</td>
            <td>{songInfo.rating}</td>
        </tr>
    )
}

export default Song;