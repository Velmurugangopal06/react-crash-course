function ListGroup() {
  let items = ["Chennai", "Tirunelveli", "Madurai", "Coimbatore", "Salem"];
  //   items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
