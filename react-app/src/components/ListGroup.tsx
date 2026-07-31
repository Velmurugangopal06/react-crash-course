function ListGroup() {
  const items = ["Chennai", "Tirunelveli", "Madurai", "Coimbatore", "Salem"];

  return (
    <>
      <h1>List</h1>
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
