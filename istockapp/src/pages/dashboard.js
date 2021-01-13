import React from 'react';

const Dashboard = (props) => {
    const apiKey = "19b460830b15e40d2744587c0fae9f3f";

    const symbol = props.match.params.symbol;

    const url = `https://financialmodelingprep.com/api/v3/quote/AAPL,MFST,GOOGL,FB,ORCL,INTL?apikey=${apiKey}}`

    const[stock, setStock] = React.useState("null");

    const getStock = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setStock(data);
    };

    React.useEffect(() => {
        getStock();
    }, []);


};

export default Dashboard;