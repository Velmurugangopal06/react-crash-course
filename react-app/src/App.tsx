import ListGroup from "./components/ListGroup";

let cities = ["Chennai", "Tirunelveli", "Madurai", "Coimbatore", "Salem"];
let fruits = ["Apple", "Mango", "Banana", "Grapes", "Orange"];

function App() {
  return (
    <div>
      <ListGroup items={cities} heading="Cities" />
      <ListGroup items={fruits} heading="Fruits" />
      {/* <ListGroup /> */}
    </div>
  );
}

export default App;
