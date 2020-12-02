import React,{useState,useEffect} from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

function Tag(props) {
    const[gif,setGif]=useState('');
    const[tag,setTag]=useState('dogs');

    useEffect(() => {  
        fetchGif(tag);    
    }, []);

    const fetchGif=async(tag)=>{
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data}=await axios.get(url);
        const imageSrc=data.data.images.downsized_large.url;
        console.log(imageSrc);
        setGif(imageSrc);
    }    

   const handleClick=()=>{
    fetchGif(tag);
   }


    return (
        <div className="container">
            <input type="text" value={tag} onChange={(e)=>setTag(e.target.value)}/>
           <h1 id="tagged" onClick={handleClick}>Tagged Gif</h1> 
            <img width="500px" src={gif} alt="Random Gif" />
        </div>
    );
}

export default Tag;