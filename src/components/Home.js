import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ data, match }) => {
    console.log(match);

    return (
        <div>
            <h1>Welcome user</h1>
            {data.map(e => {
                return <Link to={`products/${e.id}`} key={e.id}>
                    <div >
                        <p >{e.name}</p>
                        <span style={{ float: "right" }}> {e.price}</span>
                    </div>
                </Link>
            })}
        </div>
    );
}

export default Home;
