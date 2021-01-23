import React from 'react';

const Coin = ({image, name, symbol, price, volume}) => {
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
                </div>
            </div>
        </div>
    )
}

export default Coin;