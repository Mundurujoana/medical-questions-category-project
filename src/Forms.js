import React, { useState } from 'react';

function Forms() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [newQuestion, setNewQuestion] = useState('');
//   const [newAnswer, setNewAnswer] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories([...categories, { name: newCategory, questions: [{ text: newQuestion }] }]);
    setNewCategory('');
    setNewQuestion('');
    // setNewAnswer('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category:
        <input type="text" value={newCategory} onChange={e => setNewCategory(e.target.value)} />
      </label>
      <br />
      <label>
        Question:
        <input type="text" value={newQuestion} onChange={e => setNewQuestion(e.target.value)} />
      </label>
      <br />
      {/* <label>
        Answer:
        <input type="text" value={newAnswer} onChange={e => setNewAnswer(e.target.value)} />
      </label> */}
      <br />
      <button type="submit">Add</button>
    </form>
  );
}
export default Forms;