import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ data }) => {


    return (
        <div>
            <h1>Welcome user</h1>
            <div class="boxes">
                {data.map(({ price, name, shortDescription, slug, id }) => {
                    const currencyFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
                    return <Link to={`products/${slug}`} className="item" key={id}>
                        <h2>{name}</h2>
                        <p>{shortDescription}
                        </p>
                        <span className="price">{currencyFormat}</span>
                    </Link>
                })}
            </div>
        </div >
    );
}

export default Home;
