import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import Card from '../card';

const CardDetail=()=>{
    const [product,setProduct] = useState({});
    let {id} = useParams()

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(json => setProduct(json))        
    },[id])
    return(
        <div>
            <div key={product.id}>
                <Card data={product}/>
            </div>
        </div>
    )
}

export default CardDetail;