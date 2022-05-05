import '../styles/Items.css';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import db from '../utils/firebaseConfig'

const ItemListContainer = () =>{
    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {
        const fetchFromFirestore = async () => {
            let q;
            if (idCategory === undefined) {
                q = query(collection(db, 'products'), orderBy('title'))
            } else {
                q = query(collection(db, 'products'), where('categoryId', '==', idCategory))
            }
            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            return dataFromFirestore;
        };
        return fetchFromFirestore ()
            .then (result => setDatos(result))
            .catch (error => console.log(error))
    }, [idCategory]);

    return (
        <>
            <ItemList items = {datos}/>
        </>
    );
};

export default ItemListContainer;