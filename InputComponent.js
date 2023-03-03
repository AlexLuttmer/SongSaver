function InputComponent ({songInfo, handleChange, handleSubmit}) {
    // console.log("songInfo:", songInfo)
    return (
            <form className="song-form">

                <input 
                    name="songTitle" 
                    type="text" 
                    value={songInfo.songTitle}
                    className="song-inputs" 
                    onChange={handleChange} 
                    placeholder='Title'
                /> 

                <input 
                    name="songArtist" 
                    type="text" 
                    value={songInfo.songArtist}
                    className="song-inputs" 
                    onChange={handleChange} 
                    placeholder='Artist'
                />    

                <select 
                    name="songGenre"
                    className="song-inputs" 
                    onChange={handleChange} 
                    value={songInfo.songGenre}>
                        <option>... Select Genre ...</option>
                        <option value="Genre 1">Genre 1</option>
                        <option value="Genre 2">Genre 2</option>
                        <option value="Genre 3">Genre 3</option>
                </select>

                <select name="songRating" 
                    className="song-inputs" 
                    onChange={handleChange} 
                    value={songInfo.songRating}>
                        <option>... Select Rating ...</option>
                        <option value="1 Star">1 Star</option>
                        <option value="2 Stars">2 Stars</option>
                        <option value="3 Stars">3 Stars</option>
                        <option value="4 Stars">4 Stars</option>
                        <option value="5 Stars">5 Stars</option>
                </select>

                <button onClick={handleSubmit}> 
                    Add your song 1 
                </button>

                <input 
                    type="submit" 
                    value="Add your song 2" 
                    onClick={handleSubmit}
                />  
                
            </form>
    )
}

export default InputComponent