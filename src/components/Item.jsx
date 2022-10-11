import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";



const Item = ({productos}) => {
    return  (
        <>
            <div className="contenedor">
                <Card className='card'>
                    <Card.Img variant="top" style={{ width: '16rem',height:'14rem'}} src={productos.img} />
                    <Card.Body>
                    <Card.Title style={{color:'black', fontSize:'20px'}} > {productos.nombre} </Card.Title>
                    <Link to={`/detalle/${productos.id}`}>
                        <Button variant='primary' >Ver más</Button>
                    </Link>
                    </Card.Body>
                </Card>
            </div>
        </>
        
    )
        
}

export default Item;

