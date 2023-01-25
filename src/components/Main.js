import React, { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { Table, Card, Image, Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
import './styles.css';
function Main() {
  const [choseCategory, setChooseCategory] = useState('');
  const [data, setData] = useState([]);
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
      setData(result)
    } else {
      console.log("something went wrong")
    }
  };
  useEffect(() => {
    if (choseCategory !== "") {
      handleSyncData();
    }
  }, [choseCategory]);
  const handleChange = (e) => {
    setChooseCategory(e.target.value)
  }
  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <label>
          Select a category:
          <select value={choseCategory} onChange={(e) => {
            handleChange(e)
          }}>
            <option value="">Select a category</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
            <option value="sports">Sports</option>
          </select>
        </label>
        <Table responsive>
          <thead>
            <tr>
              <th>No</th>
              <th>Category name</th>
              <th>Questions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {(data.questions) && (data.questions.map((Item, index) => (
          <tr key={index}>
             <td>{index + 1}</td>
             <td>Category
             </td>
             <td>{Item
             }</td>
             <td>
             <Button variant='primary'>Edit</Button>{' '}
             <Button variant='danger'>Delete</Button>
         </td>
          </tr>
          )))}
          </tbody>
        </Table>
      </form>
    </div>
  );
}
export default Main;







