import React, { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Main() {
  const [choseCategory,setChooseCategory] =useState('');
  const navigate = useNavigate();

  // const handleCategoryChange = (event) => {
  //   setSelectedCategory(event.target.value);
  // };


  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  const handleSyncData = async () => {
    const dataRef = doc(db, `categories/${choseCategory}`);
    const docSnap = await getDoc(dataRef);
    if (docSnap.exists()) {
        const result = docSnap.data();
        console.log(result,"+++++++++++");
    } else {
     console.log("something went wrong")
    }
};
useEffect(() => {
  if(choseCategory !== ""){
    handleSyncData();
  }
}, [choseCategory]);


const handleChange=(e)=>{
  setChooseCategory(e.target.value)
}
  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <label>
          Select a category:
          <select value={choseCategory} onChange={(e)=>{
            handleChange(e)
          }}>
            <option value="">Select a category</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
            <option value="sports">Sports</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Main;
