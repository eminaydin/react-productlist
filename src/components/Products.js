import React from 'react';
import data from "../data/products.json"
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <table>
                <tr>
                    <th><Link to="/"><a>ss</a></Link>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                {data.map(e => {
                    return (
                        <tr>
                            <th>{e.name}</th>
                            <th>{e.description}</th>
                            <th>{e.price}</th>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default Products;
