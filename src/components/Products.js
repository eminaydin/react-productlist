import React, { useState, useEffect } from 'react';
import data from "../data/products.json"
import { Link } from 'react-router-dom';
import "../App.scss"
import { motion } from "framer-motion"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import { Input } from 'semantic-ui-react';
import queryString from "query-string"

function Products({ match, animation, history, location }) {
    const [initialData, setInitialData] = useState(data);
    const [iconDirection, setIconDirection] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [stateObject, setStateObject] = useState({
        query: '',
        filteredData: data,
    });
    const parsed = queryString.parse(location.search);
    const descending = [].concat(stateObject.filteredData)
        .sort((a, b) => a.price < b.price ? 1 : -1);
    const ascending = [].concat(stateObject.filteredData)
        .sort((a, b) => a.price > b.price ? 1 : -1);

    const handleInputChange = event => {
        setIsLoading(true)
        const query = event.target.value;
        setTimeout(() => { setIsLoading(false) }, 300);
        setStateObject({
            query,
            filteredData: initialData.filter(element => {
                return element.name.toLowerCase().includes(query.toLowerCase());
            })
        })
        if (parsed.sort === "descending") {
            setStateObject({
                query,
                filteredData: initialData.filter(element => {
                    return element.name.toLowerCase().includes(query.toLowerCase());
                }).sort((a, b) => a.price > b.price ? 1 : -1)

            })

        } else if (parsed.sort === "ascending") {
            setStateObject({
                query,
                filteredData: initialData.filter(element => {
                    return element.name.toLowerCase().includes(query.toLowerCase());
                }).sort((a, b) => a.price < b.price ? 1 : -1)

            })
        }
    };




    useEffect(() => {



        if (parsed.sort === "descending") {
            setStateObject({ filteredData: descending })
            setIconDirection("descending")
        } else if (parsed.sort === "ascending") {
            setStateObject({ filteredData: ascending })
            setIconDirection("ascending")
        } else if (!parsed.sort) {
            setStateObject({ filteredData: data })
            setIconDirection("")
        }

    }, [location.search]);


    const handle = (e) => {
        const target = e.currentTarget.name;
        if (target === "reset") {
            history.replace("/products")
        } else { history.replace({ search: `?sort=${target}` }) }


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
                    <button name="reset" onClick={handle}>Reset</button>
                    <button name="ascending" onClick={handle}>Sort up</button>
                    <button name="descending" onClick={handle}>Sort down</button>
                </div>
                <h2> Product List {iconDirection}</h2>

                <Input
                    icon={{ name: 'search', circular: true, link: true }}
                    placeholder='Search...'
                    loading={isLoading}
                    value={stateObject.query}
                    onChange={handleInputChange}
                    style={{ margin: "20px" }}
                />
                <li className="table-header">
                    <div className="col col-1">Name</div>
                    <div className="col col-2">Description</div>
                    <div className="col col-3">Price <span>{iconDirection === "ascending" && <AiOutlineArrowUp />}{iconDirection === "descending" && <AiOutlineArrowDown />}</span></div>
                </li>
                {stateObject.filteredData.length < 1 && "Sorry no match found"}
                {stateObject.filteredData.map(({ name, shortDescription, price, id, slug }) => {
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