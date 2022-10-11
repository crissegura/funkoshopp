import {React, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from "./CartContext";
import { Button } from "react-bootstrap";


function ItemCount( {stock, producto, productoCart} ){

    const {addToCart} = useContext(CartContext);

    const [cantidad, setCantidad]= useState(1)

    const sumarCant = () =>{
        if(cantidad < stock) {setCantidad(cantidad+1)}
    }
    const restarCant = () =>{
        if(cantidad > 1) {setCantidad(cantidad-1)}
    }

    const [mostrarBtnComprar, setMostrarBtnComprar] = useState(false);

    const onAdd = () => {
        setMostrarBtnComprar(true);
        addToCart(productoCart,cantidad)
      }

    return(
        <div style={{padding:'5px'}}>
            <p>stock: {stock} </p>
            <div style={{display:'flex',alignItems:'baseline',justifyContent:'center'}}>
                <Button variant='danger' onClick={()=> restarCant()}>
                    -
                </Button>
                <p style={{margin:'15px'}}>
                    {cantidad}
                </p>
                <Button variant='success'  onClick={()=> sumarCant()}>
                    +
                </Button>
            </div>
            <div>
                { mostrarBtnComprar ? 
                    <Link to="/carrito/">
                        <Button variant='primary' >
                            Ir al carrito 
                        </Button> 
                    </Link>
                :   
                    <Button onClick={()=> onAdd()} variant='primary'>
                    Agregar al carrito        
                    </Button> }
            </div> 
        </div>
    )
}

export default ItemCount;