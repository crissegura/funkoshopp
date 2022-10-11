import React,{useState, useContext} from "react";
import ItemCount from './ItemCount';


const ItemDetail = ({item}) =>{

    return(
        <div className="contenedorDetalle" key={item.id}>
                <div className="image">
                    <img className="imgDetail" src={item.img} />
                </div>
                <div className="content">
                    <h3 style={{fontSize:'30px'}}>{item.nombre} </h3> 
                    <br />
                    <p style={{fontSize:'20px'}} >{item.descripcion} </p>
                    <br />
                    <b style={{fontSize:'20px'}}> $ {item.precio} </b>
                    <ItemCount  stock={item.stock} producto={item.nombre} productoCart={item} />  
                </div>
        </div>
    )
}

export default ItemDetail;