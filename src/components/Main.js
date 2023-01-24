import React, { useState } from 'react';

function Main({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <h2>Categories:</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.name} onClick={() => setSelectedCategory(category)}>
            {category.name}
          </li>
        ))}
      </ul>
      {selectedCategory && (
        <div>
          <h2>Questions:</h2>
          <select>
            {selectedCategory.questions.map((question) => (
              <option key={question.text}>
                {question.text} - {question.answer}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  )
}

export default Main;
