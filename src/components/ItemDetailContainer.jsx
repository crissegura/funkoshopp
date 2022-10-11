import React, {useEffect,useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import db from "../services/firebase";
import { getDoc, doc } from "firebase/firestore";
import Loader from './Loader';


const ItemDetailContainer = () => {

    const {id} = useParams()

    const [item, setItem] = useState([])

    const getItem = async (idItem) =>{
        try {
            const document = doc(db,"Items",idItem)
            const response = await getDoc(document)
            const result = {id: response.id,...response.data()}
            setItem(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getItem(id)
    },[])

    return(
       item ? (< ItemDetail item={item} /> ) : ( <Loader /> ) 
    )

}

export default ItemDetailContainer;