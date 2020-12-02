import React,{useState,useEffect} from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

function Random(props) {

    const[gif,setGif]=useState('');

    useEffect(() => {   
        
        fetchGif();    
    }, []);

    const fetchGif=async()=>{
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data}=await axios.get(url);
        const imageSrc=data.data.images.downsized_large.url;
        console.log(imageSrc);
        setGif(imageSrc);
    }    

   const handleClick=()=>{
    fetchGif();
   }


    return (
        <div className="container">
           <h1 id="random" onClick={handleClick}>Random Gif</h1> 
            <img width="500px" src={gif} alt="Random Gif" />
        </div>
    );
}

export default Random;