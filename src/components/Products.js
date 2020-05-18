import React, { useState } from 'react';
import data from "../data/products.json"
import { Link } from 'react-router-dom';
import "../App.scss"
import { motion } from "framer-motion"


function Products({ match, animation, location, history }) {
    console.log(location);

    const [myData, setMyData] = useState(data);

    const descending = [].concat(data)
        .sort((a, b) => a.name < b.name ? 1 : -1);

    const ascending = [].concat(data)
        .sort((a, b) => a.name > b.name ? 1 : -1);

    const ascSorting = () => {
        setMyData(ascending); history.replace({
            pathname: '/products',
            search: '?sort=asc',
        })
    }

    const descSorting = () => {
        setMyData(descending); history.replace({
            pathname: '/products',
            search: '?sort=desc',
        })
    }
    const reset = () => {
        setMyData(data); history.replace({
            pathname: '/products',
            search: '',
        })
    }
    return (
        <motion.div className="container"
            initial="initial"
            animate="in"
            exit="out"
            variants={animation}

        >
            <ul className="responsive-table">
                <div className="table-sorting">
                    <button onClick={reset}>Reset</button>
                    <button onClick={ascSorting}>Sort up</button>
                    <button onClick={descSorting}>Sort down</button>
                </div>
                <h2> Product List</h2>
                <li className="table-header">
                    <div className="col col-1">Name</div>
                    <div className="col col-2">Description</div>
                    <div className="col col-3">Price</div>
                </li>




                {myData.map(({ name, shortDescription, price, id, slug }) => {
                    const currencyFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
                    return (
                        <div key={id}>
                            <Link to={`${match.url}/${slug}`}>  <li className="table-row" >
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
