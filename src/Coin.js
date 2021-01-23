import React from 'react';
import "./Coin.css";

const Coin = ({image, name, symbol, price, volume, priceChange, marketcap}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="coin">
                    <img src={image} alt="" />
                    <h1>{name}</h1>
                    <p className="symbol">{symbol}</p>
                </div>
                <div className="data">
                    <p className="price">${price}</p>
                    <p className="volume">${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="percent red">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="percent green">{priceChange.toFixed(2)}%</p>
                    )}
                    <p className="marketcap">
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin;