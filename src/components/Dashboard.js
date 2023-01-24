import React, { useState } from 'react';
import { Table, Card, Image, Button, Modal, Form, FloatingLabel } from 'react-bootstrap';

const Dashboard = (props) => {
    
const [showDeleteDialogue, setShowDeleteDialogue] = useState(false);
const [showAddEditForm, setShowAddEditForm] = useState(false);
const [addEditFormType, setAddEditFormType] = useState('Add'); //Add, Edit
const [validated, setValidated] = useState(false);
const handleModalClose = () => {
setShowAddEditForm(false);
setShowDeleteDialogue(false);
}
const handleAddEditFormSubmit = (e) => {
alert("Functionality Coming Soon");
}
const handleMenuItemDelete = (e) => {
alert("Delete Functionality Coming Soon");
}
return (
<div>
{/* Add/Edit Form START */}
<Modal show={showAddEditForm} onHide={handleModalClose}>
<Form noValidate validated={validated} onSubmit={handleAddEditFormSubmit}>
<Modal.Header>
<Modal.Title>{(addEditFormType === 'Add') ? 'Add Menu Item' : 'Edit'}</Modal.Title>
</Modal.Header>
<Modal.Body>
<FloatingLabel controlId="itemName" label="Item Name" className="mb-3" >
<Form.Control required type='text' placeholder='Enter item name' size='md' />
<Form.Control.Feedback type='invalid'>Item name is required</Form.Control.Feedback>
</FloatingLabel>
<FloatingLabel controlId="itemCategory" label="Item Category" className="mb-3" >
<Form.Select>
<option value="0">Starters & Snacks</option>
<option value="1">Salads</option>
<option value="2">Peri-Peri Chicken</option>
<option value="3">Sharing Platters</option>
</Form.Select>
</FloatingLabel>
<FloatingLabel controlId="itemPrice" label="Price" className="mb-3" >
<Form.Control required type='text' placeholder='Enter item price' size='md' />
<Form.Control.Feedback type='invalid'>Item Price is required</Form.Control.Feedback>
</FloatingLabel>
</Modal.Body>
<Modal.Footer>
<Button type="submit">{(addEditFormType === 'Add') ? 'Add' : 'Update'}</Button>
</Modal.Footer>
</Form>
</Modal>
{/* Add/Edit Form END */}

{/* Delete Confirmation Dialogue START */}
<Modal show={showDeleteDialogue} onHide={handleModalClose}>
<Modal.Header closeButton>
<Modal.Title>Delete Menu Item</Modal.Title>
</Modal.Header>
<Modal.Body>
<p>Are you sure you want to delete this menu item?</p>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleModalClose}>Cancel</Button>
<Button variant="danger" onClick={handleMenuItemDelete}>Yes, Delete</Button>
</Modal.Footer>
</Modal>
{/* Delete Confirmation Dialogue END */}

<Card style={{ margin: 24 }}>
<Card.Header className="d-flex justify-content-between align-items-center">
<div className="align-items-center" style={{ marginRight: 8 }}>
{/* <Image src={'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Nandos_logo.svg/1200px-Nandos_logo.svg.png'} style={{ width: 80 }} /> */}
<h4 style={{ marginTop: 8, }}>Nyamirambo real estate listing</h4>
</div>
<Button style={{ backgroundColor: '#000', borderWidth: 0, }}>Add New Item</Button>
</Card.Header>
<Card.Body>
<Table responsive>
<thead>
<tr>
<th>No</th>
<th>Property Name</th>
<th>Number of bedrooms and bathrooms</th>
<th>Price (RWF)</th>
<th>Advert type</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Luxury stand alone villa</td>
<td>3</td>
<td>350,000</td>
<td>Rent</td>
<td>
<Button variant='primary'>Edit</Button>{' '}
<Button variant='danger'>Delete</Button>
</td>
</tr>
<tr>
<td>2</td>
<td>Apartment for sale in Kibagabaga</td>
<td>2</td>
<td>550,000</td>
<td>Sale</td>
<td>
<Button variant='primary'>Edit</Button>{' '}
<Button variant='danger'>Delete</Button>
</td>
</tr>
</tbody>
</Table>
</Card.Body>
<Card.Footer className="d-flex justify-content-between align-items-center">
<p style={{ marginTop: 8, fontSize: 12, color: '#A1A1A1' }}>© 2022 by Kapsuletech</p>
</Card.Footer>
</Card>
</div>
)
}



export default Dashboard;