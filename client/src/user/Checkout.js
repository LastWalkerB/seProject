import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import checkAuthenticated from '../App';
import {emptyCart} from './cartHelpers';

const Checkout = (products) => {


    const getTotal = () => {
        return products.reduce((currVal, nextVal) => {
            return currVal + nextVal.count * nextVal.price;
        }, 0);
    }




    return(
        <div>
            <h2>
                Total: ${getTotal()}
            </h2>
        </div>
    );
}

export default Checkout;
