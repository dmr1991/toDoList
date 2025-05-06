import { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";  // Importa useDispatch y useSelector
import ItemCard from "./Components/ItemCard/ItemCard.jsx";
import AddItemForm from "./Components/AddItemForm/AddItemForm.jsx";
import Navigation from "./Components/Navigation/Navigation.jsx";
import { addTask } from "./reducers/tasksSlice";  // Importa la acción addTask

function App() {
  // Obtén las tareas del estado de Redux
  const tasks = useSelector((state) => state.tasks);

  // Inicializa el dispatch para despachar acciones
  const dispatch = useDispatch();

  // Manejador de la acción de agregar tarea (recibida desde AddItemForm)
  const handleAddTask = (task) => {
    dispatch(addTask(task));  // Despacha la acción addTask con la nueva tarea
  };

  return (
    <>
      <div className="MainContainer">
        <Navigation />
        <div className="ToDoContainer">
          <div className="FormContainer">
            {" "}
            <AddItemForm
              labelName="Title"
              placeholderName="Write title here"
              labelDescription="Description"
              placeholderDescription="Add a description"
              labelDueDate="Due date"
              onAddTask={handleAddTask}  // Pasa el manejador de agregar tarea
            />
          </div>
          <div className="ItemCardContainer">
            {tasks.map((task) => (
              <ItemCard
                key={task.id} // Asegúrate de que cada tarea tenga un ID único
                id={task.id}  // Pasa el ID de la tarea
                titleName={task.name}
                description={task.description}
                titleDate="Due Date"
                date={task.dueDate}
                cardClassName="card-blue"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
