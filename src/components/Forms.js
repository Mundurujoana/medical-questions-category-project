import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../utils/firebase';
import '../form.css';
import { useNavigate } from "react-router-dom";

function Forms() {
  const [changeCategory, setChangeCategory] = useState("");
  const [newQuestion, setNewQuestion] = useState({
    category: "",
    question: "",
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewQuestion({
      ...newQuestion,
      category: changeCategory,
      question: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const citiesRef = collection(db, 'categories');
    addDoc(collection(citiesRef, newQuestion.category, 'questions'), {
      category: newQuestion.category,
      question: newQuestion.question
  })
  .then(()=>{
    alert("new question added successfully!")
    navigate("/")
  })
  .catch(err=>{
    console.log(err)
  })
     
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