import React from "react";
import './style.css';


const Card = ({data}) => {
    return(
    <div class="card" style={{width:"18rem"}}>
      <img src={data.images[0]} class="card-img-top img-card" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{data.title}</h5>
        <p class="card-text">{data.description}</p>
      </div>
    </div>
  )
}

export default Card