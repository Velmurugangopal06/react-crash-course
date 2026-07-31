import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

let cities = ["Chennai", "Tirunelveli", "Madurai", "Coimbatore", "Salem"];
let fruits = ["Apple", "Mango", "Banana", "Grapes", "Orange"];

const handleSelectCity = (city: string) => {
  console.log(city);
};

const handleSelectFruit = (fruit: string) => {
  console.log(fruit);
};

function App() {
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

      <Alert>
        This is a simple primary alert—check it out! <b>Vel</b>
      </Alert>
    </div>
  );
}

export default App;
