import React from 'react';

const Product = ({ match }) => {


    return (
        <div>
            {match.params.topicId}
        </div>
    );
}

export default Product;
