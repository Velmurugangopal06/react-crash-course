import { useState } from "react";

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let cities = ["Chennai", "Tirunelveli", "Madurai", "Coimbatore", "Salem"];
  let fruits = ["Apple", "Mango", "Banana", "Grapes", "Orange"];

  let [showAlert, setShowAlert] = useState(false);

  const handleSelectCity = (city: string) => {
    console.log(city);
  };

  const handleSelectFruit = (fruit: string) => {
    console.log(fruit);
  };

  const handleButtonClick = () => {
    console.log("Button clicked!");
    setShowAlert(true);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectCity}
      />
      <ListGroup
        items={fruits}
        heading="Fruits"
        onSelectItem={handleSelectFruit}
      />

      {showAlert && (
        <Alert>
          This is a simple primary alert—check it out! <b>By Vel</b>
        </Alert>
      )}

      <Button
        text="Click me!"
        cssClasses={["btn", "btn-primary"]}
        onBtnClick={handleButtonClick}
      ></Button>
    </div>
  );
}

export default App;
