import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "./AddItemForm.scss";

function AddItemForm({
  labelName = "Name",
  placeholderName = "Enter name",
  labelDescription = "Description",
  placeholderDescription = "Enter description",
  labelDueDate = "Due Date",
  onAddTask, // Recibe la función para agregar tarea desde App
}) {
  // Estados locales para manejar el formulario
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear la tarea con los datos del formulario
    const newTask = {
      id: new Date().getTime(), // Generar un ID único para cada tarea
      name: taskName,
      description: taskDescription,
      dueDate: taskDueDate,
    };

    // Llamar a la función onAddTask (pasada desde App) para agregar la tarea
    onAddTask(newTask);

    // Limpiar los campos del formulario
    setTaskName("");
    setTaskDescription("");
    setTaskDueDate("");
  };

  return (
    <Form className="mainForm" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>{labelName}</Form.Label>
        <Form.Control
          type="text"
          placeholder={placeholderName}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>{labelDescription}</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder={placeholderDescription}
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDueDate">
        <Form.Label>{labelDueDate}</Form.Label>
        <Form.Control
          type="date"
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="custom-btn">
        Add Goal
      </Button>
    </Form>
  );
}

export default AddItemForm;
