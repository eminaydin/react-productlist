import React, { useState } from 'react';
import data from "../data/products.json"
import { Link } from 'react-router-dom';
import "../App.scss"
import { motion } from "framer-motion"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"

function Products({ match, animation, history }) {
    const [myData, setMyData] = useState(data);
    const [iconDirection, setIconDirection] = useState("");
    const [clickDone, setClickDone] = useState(false);
    console.log(iconDirection);

    const descending = [].concat(data)
        .sort((a, b) => a.price < b.price ? 1 : -1);

    const ascending = [].concat(data)
        .sort((a, b) => a.price > b.price ? 1 : -1);

    const ascSorting = () => {
        setClickDone(true)
        setMyData(ascending);
        history.replace({
            pathname: '/products',
            search: '?sort=asc',
        })
        setIconDirection("ascending")
    }

    const descSorting = () => {
        setClickDone(true)
        setMyData(descending);
        history.replace({
            pathname: '/products',
            search: '?sort=desc',
        })
        setIconDirection("descending")
    }
    const reset = () => {
        setMyData(data); history.replace({
            pathname: '/products',
            search: '',
        })
        setIconDirection("")
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
                    <button name="asc" onClick={ascSorting}>Sort up</button>
                    <button name="desc" onClick={descSorting}>Sort down</button>
                </div>
                <h2> Product List</h2>
                <li className="table-header">
                    <div className="col col-1">Name</div>
                    <div className="col col-2">Description</div>
                    <div className="col col-3">Price <span>{iconDirection === "ascending" && <AiOutlineArrowUp />}{iconDirection === "descending" && <AiOutlineArrowDown />}</span></div>
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
