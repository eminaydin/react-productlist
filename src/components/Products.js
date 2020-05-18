import React from 'react';
import data from "../data/products.json"
import { Link } from 'react-router-dom';
import "../App.scss"
import { motion } from "framer-motion"

function Products({ match, animation }) {



    return (

        <motion.div class="container"
            initial="initial"
            animate="in"
            exit="out"
            variants={animation}

        >
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-1">Name</div>
                    <div class="col col-2">Description</div>
                    <div class="col col-3">Price</div>
                </li>
                {data.map(({ name, shortDescription, price, id }) => {
                    const currencyFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
                    return (
                        <div>
                            <Link to={`${match.url}/${id}`}>  <li class="table-row" key={id}>
                                <div class="col col-1" data-label="Job Id">{name}</div>
                                <div class="col col-2" data-label="Customer Name">{shortDescription}</div>
                                <div class="col col-3" data-label="Amount">{currencyFormat}</div>

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
