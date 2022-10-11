import React, {useState, useContext, useEffect} from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const CartView = () => {
    const {cart, removeFromCart, getTotal} = useContext(CartContext);




    return cart.length > 0 ?(
            <div className="cartContainer">
                <div>
                    <h3 className="productosEnCarrito">Productos en carrito:</h3>
                </div>
               
                {cart.map((element)=>
                    <div className="cardCart">
                        <img className="imgCart" src={element.item.img}/>
                        <div className="textCartCard">
                            <h3 className="textCardCart" >{element.item.nombre}</h3>
                            <h3 className="textCardCart" >${element.item.precio}</h3>
                            <h3 className="textCardCart" > Cantidad: {element.cantidad} </h3>
                        </div>
                        <Button variant='danger' onClick={()=> removeFromCart(element.item.id)}>
                            Eliminar
                        </Button>
                    </div>
                )}

                    <div className="pTotal">
                        <h4 className="mx-2">Precio total: ${getTotal()} </h4>
                        <Link to='/checkout'>
                            <Button variant='primary' >
                                Confirmar compra    
                            </Button> 
                        </Link>
                    </div>
            </div>    
        ) : (
            <div className="carritoVacio"> 
                <h2>Carrito vacio</h2>
                <Link to={'/'}>
                    <Button  variant='primary'>
                        Ver productos
                    </Button>
                </Link>
            </div>
            
        )
}

export default CartView;