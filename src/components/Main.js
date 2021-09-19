import React, { useState } from 'react'
import Article from './Article'
import { Loader } from './Loader'
import useFetch from "./useFetchData"
import "./post.css"

function Main() {
    const url = "https://api.nasa.gov/planetary/apod?api_key=raGisHkQN11NgNhPxcUPvMbCIbxSCc3yooEkPh8Z&count=5"
    const [like, setLike] = useState(false)
    const data = useFetch(url)
    const { articles, errorMsg, error, loading } = data

    const handleLike = (e) => {

        if (e.keyCode === 13) {  // Checks if the key pressed is the ENTER key
            setLike((p) => {
                return {
                    ...p,
                    like: !p.like
                }
            } )
        }
    }

    return (
        <main role="main">
            {!loading ? articles.map(({ date, explanation, url, title }, idx) => <Article key={idx} imgUrl={url} handleLike={handleLike} date={date} desc={explanation} setLike={setLike} like={like} title={title} />) : <Loader error={error} errorMsg={errorMsg}/>} 
        </main>
    )
}

export default Main


// animate__heartBeat