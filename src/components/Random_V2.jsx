import React from 'react';
import useGif from '../useGif';

function RandomV2(props) {
    const { gif, fetchGif }=useGif();

    const handleClick=()=>fetchGif();
       
        return (
            <div className="container">
               <h1 id="random" onClick={handleClick}>Tagged Gif</h1> 
                <img width="500px" src={gif} alt="Random Gif" />
            </div>
        );
}

export default RandomV2;