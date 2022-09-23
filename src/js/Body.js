import React from "react";
import memeData from "./memeData";
export default function Body () {
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"/BART.jpg"
    })
    const [allMemeImage, setAllMemeImage] = React.useState(memeData)
    
    function generateBtn () {
        const memeArray = allMemeImage.data.memes
        const randomMeme = Math.floor(Math.random() * memeArray.length);
        const url = memeArray[randomMeme].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    function textHandleChange (event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value 
        }))
        
    }

    return (
    <div className="main">
         <div>
            <div  className="input-area">
                <input 
                type="text"
                placeholder="top text"
                className="input-text"
                name="topText"
                value={meme.topText}
                onChange={textHandleChange}
                />
                <input
                type="text"
                name="bottomText"
                value={meme.bottomText}
                className="input-text"
                onChange={textHandleChange} 
                placeholder="bottom text" />
                <button className="generate-btn" onClick={generateBtn}>Get Random Image</button>
                <button className="add-textbtn" >Add text</button>
            </div>
        </div> 
        <div className="meme-section">
            <img src={meme.randomImage} alt="random meme" className="meme-image" />
            <h2 className="meme-top-text">{meme.topText}</h2>
            <h2 className="meme-bottom-text">{meme.bottomText}</h2>
        </div>
            
   
    </div>
    )
}