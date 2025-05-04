import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddItemForm.scss';

function AddItemForm({ 
  labelName = "Name", 
  placeholderName = "Enter name",
  labelDescription = "Description", 
  placeholderDescription = "Enter description",
  labelDueDate = "Due Date"
}) {
  return (
    <Form className="mainForm">
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label >{labelName}</Form.Label>
        <Form.Control type="text" placeholder={placeholderName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>{labelDescription}</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder={placeholderDescription} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDueDate">
        <Form.Label>{labelDueDate}</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
      <Button variant="primary" type="submit" className="custom-btn">
        Add Goal
      </Button>
    </Form>
  );
}

export default AddItemForm;
