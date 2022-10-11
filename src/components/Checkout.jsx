import React, {useState,useContext} from 'react';
import { CartContext } from './CartContext';
import db from '../services/firebase';
import {addDoc, collection, updateDoc, doc} from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Checkout = () => {

    const {cart,getTotal,clearCart} = useContext(CartContext)

    const [orderId, setOrderID] = useState()

    const [buyer, setBuyer] = useState({
        nombre: '',
        email: '',
        telefono: ''
    })

    const {nombre, email, telefono} = buyer

    const inputChange = (e) =>{
        setBuyer((
            { 
                ...buyer,
                [e.target.name] : e.target.value 
            }
        ))
    }

    const generateOrder = async (data) =>{
        try {
            const col = collection(db,'Orders')
            const order = await addDoc(col,data)
            console.log('order n',order)
            setOrderID(order.id)
            updateStock()
            clearCart()
        } catch (error) {
            console.log(error)
        }
    }

    const updateStock = () =>{
        cart.map((item)=>{
            const docs = doc(db, 'Items', item.item.id)
            const updStock = item.item.stock - item.cantidad
            updateDoc(docs,{
                stock:updStock
            })
        })
    }

   const inputSubmit = (e) =>{
    e.preventDefault()
    const items = cart.map(e=>{return{  id : e.item.id,
                                        title : e.item.nombre,
                                        precio : e.item.precio,
                                        cantidad : e.cantidad}})
    const dia = new Date()
    const total = getTotal()
    const data = {buyer,items,dia,total}
    console.log('data',data)
    generateOrder(data)
    }

    return (
        <div>
            {!orderId? (<div className='contenedorCheckout'>
                <h3>Finalizando compra</h3>
                <form onSubmit={inputSubmit} >
                    <h5>Datos del comprador</h5>
                    <input 
                        type="text" 
                        name="nombre" 
                        value={nombre}
                        placeholder='Nombre y apellido'
                        onChange={inputChange} 
                    /> <br/>
                    <br/>
                    <input 
                        type="email" 
                        name="email" 
                        value={email}
                        placeholder='email@gmail.com'
                        onChange={inputChange} 
                    /> <br/>
                    <br/>
                    <input 
                        type="text" 
                        name="telefono" 
                        placeholder='1112345678'
                        value={telefono}
                        onChange={inputChange} 
                    /><br/>
                    <br/>
                    <Button variant='success'>
                        <input 
                        style={{background:'transparent',border:'none',color:'white'}}
                            type="submit" 
                            value="Finalizar compra"
                        />
                    </Button>
                    <Link to='/'>
                        <Button variant='danger' onClick={clearCart}>
                            Cancelar compra
                        </Button>
                    </Link>

                </form>
            </div>) : (
                <div className='orderDiv'>
                    <h3 className='orderTitle'>Orden de compra:</h3>
                    <h4 className='order'> {orderId} </h4>
                </div>
                )
            }
        </div>
    );
}

export default Checkout;
