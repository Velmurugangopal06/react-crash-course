import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["Chennai", "Tirunelveli", "Madurai", "Coimbatore", "Salem"];

  let handleItemClick = (item: string, index: number, event: MouseEvent) => {
    console.log(item, index);
    setSelectedIndex(index);
  };

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={(event) => handleItemClick(item, index, event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
