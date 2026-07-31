import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Chennai", "Tirunelveli", "Madurai", "Coimbatore", "Salem"];
  //   items = [];

  let handleItemClick = (item: string, event: MouseEvent) => {
    console.log("Item Clicked", item);
    console.log("Event", event);
  };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={index}
            onClick={(event) => handleItemClick(item, event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
