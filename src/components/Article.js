import React from 'react'

function Article({ title, desc, imgUrl, date, handleLike, like, setLike }) {
    return (
        <article aria-labelledby="title">
            <img tabIndex="0" aria-label={`${title} image`} src={imgUrl} alt={title} /><div id="desc" aria-label="description">
                <div id="post-heading">
                    <h3 id="title" tabIndex="0">{title}</h3>
                    <i> - </i>
                    <p tabIndex="0" aria-label={`date captured, ${date}`}>{date}</p>
                </div>
                <div id="title-desc" >
                    <p tabIndex="0">{desc}</p>
                </div>                                          
                <div id="like">
                    <button onKeyUp={(e) => handleLike(e)} aria-label={like ? "unlike" : "like"} >
                        <i id="icon" onClick={() => setLike((p) => !p )} className={like ? "animate__animated animate__heartBeat press" : null}><i className="fas fa-heart"></i></i>
                    </button>
                </div>
            </div>
        </article>
    )
}

export default Article
