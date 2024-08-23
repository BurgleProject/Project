import React, { useContext } from "react";
import QuoteContext from "../context/QuotesContext";

//creating the function quotes display
const QuoteDisplay = () => {

    const { allQuotes, error } = useContext(QuoteContext);

    if (error) return <p>Error: {error}</p>;
    if (!allQuotes) return <p>Loading...</p>;

    return (
        <div className="quotebox">
            <p className="quote">{allQuotes.content}</p>
            <p className="author">— {allQuotes.author}</p>
        </div>
    );
};

export default QuoteDisplay;