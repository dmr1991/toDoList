import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ItemCard.scss";

function ItemCard({
  titleName,
  name,
  titleDescription,
  description,
  titleDate,
  date,
  cardClassName
}) {
  return (
    <Card className={`mb-2 ${cardClassName} w-100`}>
      <Card.Body>
        <Card.Title>{titleName}</Card.Title>
        <Card.Text>{name}</Card.Text>
        <Card.Title>{titleDescription}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Title>{titleDate}</Card.Title>
        <Card.Text>{date}</Card.Text>
        <Button className="custom-btn">Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
