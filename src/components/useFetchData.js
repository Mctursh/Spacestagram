import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [Data, setData] = useState({
        articles: [],
        errorMsg: "",
        error: false,
        loading: true
    })

    useEffect(() => {
        const process = (attempt) => {
        fetch(url)
        .then((res) => {

            //Handling errors 
            if (!res.ok) {             
                if( attempt < 3) {
                    setTimeout(() => process(attempt + 1) ,1000)                      
                } else {
                    throw Error()
                }
            } else {
                return res.json()
            }
        })
        .then((data) => {
            
            // api json response
            setData((prev) => {
                    return {
                        ...prev,
                        loading: false,
                        error: false,
                        articles: data
                    }
                })
        }).catch(() =>
            setData((prev) => {
                    return {
                        ...prev,
                        errorMsg: "Couldn't fetch data",
                        loading: false,
                        error: true
                    }
                })
        )
    }
    process(0)
    }, [url])
    return Data 
}

export default useFetch