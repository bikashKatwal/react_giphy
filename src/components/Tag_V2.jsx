import React,{useState} from 'react';
import useGif from '../useGif';

function TagV2(props) {
    const[tag,setTag]=useState('dogs');
    const { gif, fetchGif }=useGif(tag);

    const handleClick=()=>fetchGif(tag);
       
        return (
            <div className="container">
                <input type="text" value={tag} onChange={(e)=>setTag(e.target.value)}/>
               <h1 id="tagged" onClick={handleClick}>Tagged Gif</h1> 
                <img width="500px" src={gif} alt="Random Gif" />
            </div>
        );
}

export default TagV2;