import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';



const AddCard = () => {
    const [categoryArr, setCategoryArr] = useState([]);
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [showAddCategory, setAddCategory] = useState(false);
    const [addedCard, setAddedCard] = useState([]);

    useEffect(() => {
        async function() {
            const response = await fetch(`$process.env./api/categories`)
        }
    })
    return (
        <>


            
        </>
    )
}

export default AddCard;
