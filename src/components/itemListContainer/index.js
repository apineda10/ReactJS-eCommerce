import React, {useEffect, useState} from 'react';
import Card from '../card';
import { Link } from 'react-router-dom';
import './style.css';
import { useParams } from 'react-router-dom';

const ItemListContainer=()=>{
    const [productos,setProductos] = useState([]);
    let {categoria}=useParams()
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${categoria}`)
        .then(res => res.json())
        .then(json => setProductos(json.products))        
    },[categoria])
    return(
        <div className='container'>
            {productos.map((producto)=>{
                return(
                    <Link to={`/Detalle/${producto.id}`}>
                        <Card key={producto.id} data={producto}/>
                    </Link>                   
                )
            })}
        </div>
    )
}

export default ItemListContainer;