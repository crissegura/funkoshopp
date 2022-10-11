import React , {useState,useEffect} from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../services/firebase';
import Loader from './Loader';


function ItemListContainer () {

  const [productos, setProductos] = useState([])

  const {categoria} = useParams()

  const getData = async () =>{
    
    try{
      const document = collection(db,"Items")
      const col = await getDocs(document)
      console.log('col.docs', col.docs)
      const result = col.docs.map((doc)=> doc={id:doc.id,...doc.data()})
      setProductos(result)
      console.log('result', result)
    }catch(error){
      console.log(error)

    }
  }

  const getDataCategory = async (category) =>{
    
    try{
      const document = query (collection(db,"Items"),where("categoria","==",category))
      const col = await getDocs(document)
      console.log('col.docs', col.docs)
      const result = col.docs.map((doc)=> doc={id:doc.id,...doc.data()})
      setProductos(result)
      console.log('result', result)
    }catch(error){
      console.log(error)

    }
  }

  useEffect(()=>{
    categoria? getDataCategory(categoria) : getData()
  },[categoria])

  const [texto, setTexto] = useState([])

  const getTexto=({target})=>{
    setTexto(target.value)
  }

  const bFunko = productos.filter(f=>f.nombre.toLowerCase().includes(texto.toString().toLowerCase()))
  
  return (
    <>
      <div className="buscador">
        <label className="labelBuscador">Buscá tu funko favorito</label>
        <input type="text" value={texto} onChange={getTexto} placeholder='...' className="inputBuscador" />
      </div>
    {     
      productos.length ? (<ItemList list={bFunko} />) : ( <Loader />)
    } 
    </>
    
  )
}


export default ItemListContainer;