import React, { useState } from 'react';

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
    console.log(newQuestion)
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