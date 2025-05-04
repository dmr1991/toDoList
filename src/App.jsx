import { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCard from "./Components/ItemCard/ItemCard.jsx";
import AddItemForm from "./Components/AddItemForm/AddItemForm.jsx";
import Navigation from "./Components/Navigation/Navigation.jsx";

function App() {
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
            />
          </div>
          <div className="ItemCardContainer">
            <ItemCard
              titleName={"Name Item 1"}
              name={"Example text for Item 1."}
              titleDescription={"Description"}
              description={"Description of item 1"}
              titleDate={"Due Date"}
              date={"2023-10-01"}
              cardClassName={"card-green"}
            />
            <ItemCard
              titleName={"Name Item 2"}
              name={"Example text for Item 2."}
              titleDescription={"Description"}
              description={"Description of card 2"}
              titleDate={"Due Date"}
              date={"2023-10-01"}
              cardClassName={"card-green"}
            />
            <ItemCard
              titleName={"Name Item 3"}
              name={"Example text for Item 3."}
              titleDescription={"Description"}
              description={"Description of card 3"}
              titleDate={"Due Date"}
              date={"2023-10-01"}
              cardClassName={"card-green"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
