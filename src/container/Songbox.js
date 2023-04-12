import SongList from "../components/SongList"
import React, { useState, useEffect} from 'react';


const Songbox = () => {

    const [songs, setSongs] = useState([])

    useEffect(() => {
      
        fetchSong()
  
      },[])

    
    // need to write a fetch to get the songs 

    const fetchSong = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setSongs(data['feed']['entry']) )
    }


    return (
        <>
            <h1>Songbox</h1>
            <SongList songs = {songs}></SongList>
        </>
    )
}

export default Songbox