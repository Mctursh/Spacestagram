import React from 'react'
import "./loader.css"

function Loader({ error, errorMsg }) {
    return (
        <div id="loader">
            {error ? <p>{errorMsg}</p> :  <div className="lds-facebook"><div></div><div></div><div></div></div>}            
        </div>
    )
}

export default Loader
