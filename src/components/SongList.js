import Song from "./Song";




const SongList = ({songs}) => {

    const songNodes = songs.map((song,index) => { 
            return <Song song={song} index={index}/>
        })
     

    return ( 
        <>
            {songNodes}
        </>
    );
}
 
export default SongList; 