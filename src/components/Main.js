import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };


  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <label>
          Select a category:
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
