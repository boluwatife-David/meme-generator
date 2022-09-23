import React from "react";
import memeData from "./memeData";
export default function Body () {
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"/BART.jpg"
    })
    const [allMemeImage, setAllMemeImage] = React.useState(memeData)



    // const [memeImage, setMemeImage] = React.useState("/BART.jpg")
    function generateBtn () {
        console.log("Generate button cliked!") 
        const memeArray = allMemeImage.data.memes
        const randomMeme = Math.floor(Math.random() * memeArray.length);
        const url = memeArray[randomMeme].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }
    return (
    <div className="main">
         <div className="input-area">
            <form>
                <input 
                type="text"/>
            </form>
            
           <div className="meme-section">
           <img src={meme.randomImage} alt="random meme" className="meme-image" />
           </div>
         </div>
       
    </div>
    )
}