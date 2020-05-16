import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ data, match }) => {


    return (
        <div>
            <h1>Welcome user</h1>
            <div class="boxes" >
                {data.map(e => {
                    return <div class="item" key={e.id}>
                        <h2>{e.name}</h2>
                        <hr />
                        <p>{e.shortDescription}
                        </p>
                        <Link to={`products/${e.id}`} ><button>Next</button></Link>
                    </div>


                })}
            </div>
        </div>
    );
}

export default Home;
