import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../utils/firebase';

const Answer = () => {
    let { id } = useParams();

    const fetchQuestion = async (id) => {
        const docRef = doc(db, "categories", "health", "questions", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
    }

    useEffect(() => {
        fetchQuestion(id)
    }, [])
    return (
        <div>Answer</div>
    )
}

export default Answer;