import React from 'react';
import data from "../data/products.json"
import { Link, Route } from 'react-router-dom';
import Product from './Product';

function Products({ match, history }) {


    function back() {
        history.goBack();
    }
    return (
        <div>

            <table>
                <tr>
                    <th><a onClick={back}>ss</a>    Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                {data.map(({ name, description, price, id }) => {
                    return (
                        <Link to={`${match.url}/${id}`} >
                            <tr key={id}>
                                <th>{name}</th>
                                <th>{description}</th>
                                <th>{price}</th>
                            </tr>
                        </Link>
                    )
                })}
            </table>


        </div>
    );
}

export default Products;
