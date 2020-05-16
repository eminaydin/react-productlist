import React from 'react';
import data from "../data/products.json"
import { Link, Route } from 'react-router-dom';
import "../App.scss"

function Products({ match, history }) {


    function back() {
        history.goBack();
    }
    return (

        <div class="container">
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-1">Name</div>
                    <div class="col col-2">Description</div>
                    <div class="col col-3">Price</div>
                </li>
                {data.map(({ name, shortDescription, price, id }) => {
                    return (
                        <div>
                            <Link to={`${match.url}/${id}`}>  <li class="table-row" key={id}>
                                <div class="col col-1" data-label="Job Id">{name}</div>
                                <div class="col col-2" data-label="Customer Name">{shortDescription}</div>
                                <div class="col col-3" data-label="Amount">${price}</div>

                            </li>
                            </Link>
                        </div>
                    )
                })}
            </ul>
        </div>


    );
}

export default Products;
