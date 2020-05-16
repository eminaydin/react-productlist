import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ data, match }) => {


    return (
        <div>
            <h1>Welcome user</h1>
            <div class="boxes">
                {data.map(e => {
                    const currencyFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(e.price);
                    return <Link to={`products/${e.id}`} className="item" key={e.id}>
                        <h2>{e.name}</h2>
                        <p>{e.shortDescription}
                        </p>
                        <span className="price">{currencyFormat}</span>
                    </Link>
                })}
            </div>
        </div >
    );
}

export default Home;
