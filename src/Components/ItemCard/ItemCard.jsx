  import Card from "react-bootstrap/Card";
  import Button from "react-bootstrap/Button";
  import "./ItemCard.scss";
  import { useDispatch } from "react-redux";  // Importa useDispatch
  import { removeTask } from "../../reducers/tasksSlice";  // Importa la acción removeTask


  function ItemCard({
    id,
    titleName,
    description,
    titleDate,
    date,
    cardClassName
  }) {

    const dispatch = useDispatch(); // Inicializa useDispatch

    // Función para manejar el clic en el botón "Remove"
    const handleRemove = () => {
      dispatch(removeTask(id));  // Despacha la acción removeTask con el ID de la tarea
    };

    return (
      <Card className={`mb-2 ${cardClassName} w-100`}>
        <Card.Body>
          <Card.Title>{titleName}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Title>{titleDate}</Card.Title>
          <Card.Text>{date}</Card.Text>
          <div className="button-container">
          <Button className="custom-btn" onClick={handleRemove}>Remove</Button>
          <Button className="custom-btn">Edit</Button></div>
        </Card.Body>
      </Card>
    );
  }

  export default ItemCard;
