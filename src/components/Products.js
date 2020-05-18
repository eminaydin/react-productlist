import React, { useState } from 'react';
import data from "../data/products.json"
import { Link } from 'react-router-dom';
import "../App.scss"
import { motion } from "framer-motion"


function Products({ match, animation }) {
    const [mydata, setMyData] = useState(data);

    const descending = [].concat(data)
        .sort((a, b) => a.name < b.name ? 1 : -1);

    const ascending = [].concat(data)
        .sort((a, b) => a.name > b.name ? 1 : -1);

    const ascSorting = () => setMyData(ascending)

    const descSorting = () => setMyData(descending)
    const reset = () => setMyData(data)
    return (
        <motion.div className="container"
            initial="initial"
            animate="in"
            exit="out"
            variants={animation}

        >
            <ul className="responsive-table">
                <li className="table-header">
                    <button className="col col-1" onClick={reset}>Reset</button>
                    <button className="col col-2" onClick={ascSorting}>Sort up</button>
                    <button className="col col-3" onClick={descSorting}>Sort down</button>
                </li>
                <li className="table-header">
                    <div className="col col-1">Name</div>
                    <div className="col col-2">Description</div>
                    <div className="col col-3">Price</div>
                </li>

                {mydata.map(({ name, shortDescription, price, id }) => {
                    const currencyFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
                    return (
                        <div key={id}>
                            <Link to={`${match.url}/${id}`}>  <li className="table-row" >
                                <div className="col col-1" data-label="Job Id">{name}</div>
                                <div className="col col-2" data-label="Customer Name">{shortDescription}</div>
                                <div className="col col-3" data-label="Amount">{currencyFormat}</div>

                            </li>
                            </Link>
                        </div>
                    )
                })}
            </ul>
        </motion.div>


    );
}

export default Products;
