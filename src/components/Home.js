import React from 'react';

const Home = ({ data }) => {

    return (
        <div>
            <h1>Welcome user</h1>
            {data.map(e => {
                return <p key={e.id}>{e.name}</p>
            })}
        </div>
    );
}

export default Home;
