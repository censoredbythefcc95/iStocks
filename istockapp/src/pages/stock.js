import React, { useEffect, useState, useEffects } from "react";

const Stock = (props) => {

    //state of null
    const [stock, setStock] = useState(null);

    const { symbol } = props.match.params;
    setStock = async () => {
        const apiKey = "19b460830b15e40d2744587c0fae9f3f"
        const response = await fetch()
        const data = await response.json()
        setStock(...data)
    };

    //Effect Hook
    useEffect(() => {
        setStock()
    }, [])

    const loading = () =>
    <h1>Loading {symbol}</h1>

    const loaded = () => {
        return (
            <>
            <h1>{symbol}</h1>
            <h2>Volume: {stock.volume}</h2>
            <h2>Price: {stock.price}</h2>
            </>
        )
    }
};

export default Stock;