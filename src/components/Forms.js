import { addDoc, collection, doc, where } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../utils/firebase';

function Forms() {
  const [changeCategory,setChangeCategory] = useState("");
  const [newQuestion, setNewQuestion] = useState({
    category: "",
    question: "",
  })

  const handleChange = (e) => {
    setNewQuestion({
      ...newQuestion,
      category:changeCategory,
      question: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(newQuestion)
    //   const dataRef = doc(db, `categories/${changeCategory}`);
    //   addDoc(collection(dataRef,newQuestion))
    //   .then(res=>{
    //     console.log(res,"Submitted sucessfull")
    //   })
    //   .catch(err=>{
    //     console.log(err,"errooooo");
    //   })

// const taskQuery =doc(collection(db, "categories"), where("uid", "==", changeCategory))
// console.log(taskQuery)
// const taskDocs = getDocs(taskQuery)
// taskDocs.forEach((taskDoc) => {
//   await setDoc(taskDoc.ref, {
//     name: 'prueba',
//     uid: currentUser,
//     projectId: newDocRef.id
//   })
// })

  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select a category:
        <select onChange={(e) => {
          setChangeCategory(e.target.value);
        }}>
          <option value="" >Select a category</option>
          <option  value="health">Health</option>
          <option  value="education">Education</option>
          <option  value="sports">Sports</option>
        </select>
      </label>
      <br />
      <label>
        Question:
        <input type="text" name='question' value={newQuestion.question} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Add</button>
    </form>
  );
}
export default Forms;