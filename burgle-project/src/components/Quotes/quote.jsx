import React, { useState, useEffect } from 'react';

const QuoteOTD = () => {
    //state to store the fetched data. look into use state
    const [data, setData] = useState(null);
    //state to manage loading
    const [loading, setLoading] = useState(true); // State to manage loading

    //effect (or command) to fetch the data when the component is mounted onto the site 
    //anonymous func inside 
    useEffect(() => {
        fetchData();
    }, []); //[] empty array makes the useEffect fetch the data every time this component is loaded onto the app and refreshed, rather than changing everytime something else is refreshed or changed.

    //writing the fetch function
    const fetchData = async () => {
        try {
            //Wait for the data from the json file to load 
            const response = await fetch('https://zenquotes.io/api/today');
            //if successfully retrieved, it will be displayed. if not, we throw an error
            if (!response.ok) {
                throw new Error(`Error: ${response.status}, ${response.statusText}`)
            } else {
                console.log("success!")
            }

            const isJson = (response.headers.get('content-type') || '').includes('application/json')

            // Parse the JSON data from the response
            let result = isJson ? await response.json() : await response.text()

            // Update the state with the fetched data
            console.log(result)
            setData(result);

        } catch (error) {
            console.error('Error fetching data:', error.message);
        } finally {
            setLoading(false)
        }
    }

    console.log("its me quoteOTD")
    return (
        <div>
            <h1>Quote of the Day</h1>
            {loading ? (
                <p>Loading...</p>
            ) : data ? (
                // Assuming data is an array with the quote in the first object
                <p>{data[0].q} - {data[0].a}</p>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );


};


export default QuoteOTD

