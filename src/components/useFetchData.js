import { useState, useEffect } from "react"

const useFetch = ({ url }) => {

    const [Data, setData] = useState({
        articles: [],
        errorMsg: "",
        error: false,
        loading: true
    })

    useEffect(() => {
        async function fetch_ (url) {
            const raw = await fetch(url)
            if (!raw.ok) {             
                throw Error()
            } else {
                const json = await raw.json()
                setData((prev) => {
                    return {
                        ...prev,
                        loading: false,
                        error: false,
                        articles: json
                    }
                })
            }
        }
        
        try {
            fetch_("https://api.nasa.gov/planetary/apod?api_key=raGisHkQN11NgNhPxcUPvMbCIbxSCc3yooEkPh8Z&count=5")            
        } catch (error) {
            setData((prev) => {
                return {
                    ...prev,
                    errorMsg: error,
                    loading: false,
                    error: true
                }
            })
        }
    }, [url])
    return Data 
}

export default useFetch