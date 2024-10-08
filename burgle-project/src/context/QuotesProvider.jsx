import { useEffect, useState } from "react";
import handleFetch from "../utils/Fetch";
import QuoteContext from "./QuotesContext";


const QuoteProvider = ({ children }) => {

    const [allQuotes, setAllQuotes] = useState('')
    const [error, setError] = useState('')


    useEffect(() => {
        const fetch = async () => {
            const [data, error] = await handleFetch(`https://api.quotable.io/random`)

            if (data) setAllQuotes(data)
            console.log(data)
            if (error) setError(error.message)


        }
        fetch()
    }, [])

    console.log(allQuotes)

    let contextValues = {
        allQuotes,
        setAllQuotes
    }

    console.log("it's me the api file")
    return (
        <QuoteContext.Provider value={contextValues}>
            {children}
        </QuoteContext.Provider>
    )

}


export default QuoteProvider