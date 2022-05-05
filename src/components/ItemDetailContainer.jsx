import '../styles/Items.css';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import db from '../utils/firebaseConfig';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        const fetchOneFromFirestore = async () => {
            const docRef = doc (db, "products", idItem);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return {
                    id: idItem,
                    ...docSnap.data()
                }
            } else {
            console.log("Oops! no pudimos encontrar el producto.");
            }
        }
        return fetchOneFromFirestore()
            .then (result => setDato (result))
            .catch (error =>console.log (error))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer;