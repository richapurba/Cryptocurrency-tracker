import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';


function App() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
            setCoins(res.data);
        }).catch(error => console.log(error))
    }, []);

    return (
        <div className="app">
            <div className="search">
                <h1 className="text">Search for a currency</h1>
                <form>
                    <input type="text" placeholder="Search" className="input" />
                </form>
            </div>
        </div>
  );
}

export default App;
