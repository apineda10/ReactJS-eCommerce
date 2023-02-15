import React,{useEffect,useState} from "react";
import './style.css';
import Card from "../components/card";
import { Link } from "react-router-dom";
import ItemListContainer from "../components/itemListContainer";

const Home = () => {
    const [productos,setProductos] = useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/products/")
        .then(res => res.json())
        .then(json => setProductos(json.products))        
    },[])
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

export default Home