import React from "react";
import Item from "./Item";


const ItemList = ({list}) => {
    return <div className="contenedorTS" >
        {list.map((productos)=> (
            <Item productos={productos} key={productos.id} />    
        ))}
    </div>
}

export default ItemList;
