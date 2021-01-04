import React, {useState, useEffect} from 'react';
import Layout from '../core/Layout';
import Card from './Card';

const ProductPage = (props) => {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState(false);
    console.log("chootar");
    console.log(props);

    useEffect(() => {
        const product_id = props.match.params.id;
        console.log(product_id);
        loadSingleProduct(product_id);
    }, [props]);

    console.log(product);
const read =  (product_id) => {
    return(
       fetch(`http://localhost:8000/api/product/${product_id}`, {
      method: "GET"
        })
        .then(res => {
          console.log("sucfesds")
            return res.json()
        })
        .catch(err => {
            console.log("errrorrrrrrrr")
            console.log(err)
        })
    );
}

const loadSingleProduct =  (product_id) => {
         read(product_id)
        .then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
            }
        });
    }
    console.log("hello");
    console.log(product);

   var charity = {}

    var name1 = product.map((product, i) => {

        charity = {name: product.product_name, price: product.price, description: product.description};
        return charity;


    });

    console.log(name1);
    return(

        <Layout
            title={charity.name}
            description={charity.description
                && charity.description.substring(0, 100)}
            className='container-fluid'>
            {charity.price}
            {charity.description}

        </Layout>
    );
}

export default ProductPage;
