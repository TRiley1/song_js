const Song = ({song,index}) => {
    return ( 
        <h3>{index +1} {song['title']['label']}</h3>
     );
}
 
export default Song;