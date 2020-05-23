import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
const Home = ({ data, animation }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={animation}>
            <h1>Welcome user</h1>
            <div className="boxes">
                {data.map(({ price, name, shortDescription, slug, id }) => {
                    const currencyFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
                    return <Link to={`products/${slug}`} className="item" key={id}>
                        <h2>{name}</h2>
                        <p>{shortDescription}</p>
                        <span className="price">{currencyFormat}</span>
                    </Link>
                })}
            </div>
        </motion.div >
    );
}

export default Home;
