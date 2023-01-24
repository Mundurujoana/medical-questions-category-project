import './app.css';
import React from 'react';


function Display() {
  
    return (
        <div class="container">
  <h2>Categories:</h2>
  <ul class="categories">
    <li class="category">category1
      <ul class="questions">
        <li>question1 - answer1</li>
        <li>question2 - answer2</li>
      </ul>
    </li>
    <li class="category">category2
      <ul class="questions">
        <li>question3 - answer3</li>
        <li>question4 - answer4</li>
      </ul>
    </li>
  </ul>
</div>
  )
}

export default Display;