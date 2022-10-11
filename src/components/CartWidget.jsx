import React, { useContext } from "react";
import {CartContext} from './CartContext';

const CartWidget = () =>{

    const {cart, totalCantidad} = useContext(CartContext);

    return cart.length > 0 ? (
        <div>
            <h3 className="cartIconCant">
                <span> {totalCantidad()} </span>
                <img className="imgWdgCarrito" src="https://cdn.icon-icons.com/icons2/1138/PNG/512/1486395300-03-trolley_80567.png" alt="" />
            </h3>
        </div>
    ) : (
        <></>
    )
}

export default CartWidget;