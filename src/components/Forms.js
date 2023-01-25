import { async } from '@firebase/util';
import { addDoc, collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../utils/firebase';

function Forms() {
  const [changeCategory, setChangeCategory] = useState("");
  const [newQuestion, setNewQuestion] = useState({
    category: "",
    question: "",
  })

  const handleChange = (e) => {
    setNewQuestion({
      ...newQuestion,
      category: changeCategory,
      question: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    addDoc(collection(db, `categories`, 'health'), {
      name: "user.displayName",
      authProvider: 'google',
      email: "user.email",
    });

    // const q = query(collection(db, "categories"));
    //     const querySnapshot = await getDocs(q);
    //     const queryData = querySnapshot.docs.map((detail) => ({
    //         ...detail.data(),
    //         id: detail.id,
    //     }));
    //     console.log(queryData);
    //     queryData.map(async (v) => {
            // await setDoc(doc(db, `categories/health/results`, "questions"), newQuestion);
        // })
    // const dbRef = collection(db, "categories");
  //   const citiesRef =await collection(db, 'categories');
  //   // await setDoc(doc(db, "categories", "health"), newQuestion);
  //   await addDoc(collection(citiesRef, 'categories', 'sports'), {
  //     name: 'Golden Gate Bridge',
  //     type: 'bridge'
  // })

    // addDoc(dbRef, newQuestion)
    //   .then(docRef => {
    //     console.log(dbRef.id); //p4eZcO5QV43IYnigxALJ
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })

    // const docRef = doc(db, "categories", "health");
    // const colRef = collection(docRef, "checkout_sessions")
    // addDoc(colRef, {
    //   price: priceId,
    //   and: two,
    //   more: pairs,
    // });


    //  await db.collection("categories")
    //     .doc("health")
    //     .set({
    //       questions: newQuestion,
    //     })
    //     .then(function () {
    //       console.log("Value successfully written!");
    //     })
    //     .catch(function (error) {
    //       console.error("Error writing Value: ", error);
    //     });
    // try {
    //   const docRef = await addDoc(collection(db, "categories"),
    //     newQuestion
    //   );
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }

    // addDoc(doc(db, `categories/sports`),changeCategory )
    // .then(res=>{
    //   console.log(res)
    // })
    // .catch(err=>{
    //   console.log(err)
    // })
    //   const dataRef = doc(db, `categories/${changeCategory}`);
    //   addDoc(collection(dataRef,newQuestion))
    //   .then(res=>{
    //     console.log(res,"Submitted sucessfull")
    //   })
    //   .catch(err=>{
    //     console.log(err,"errooooo");
    //   })
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
          <option value="health">Health</option>
          <option value="education">Education</option>
          <option value="sports">Sports</option>
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