function ListGroup() {
  const listItems = [
    { id: 1, name: "New York" },
    { id: 2, name: "San Francisco" },
    { id: 3, name: "Tokyo" },
    { id: 4, name: "London" },
    { id: 5, name: "Paris" },
  ];
  return (
    <>
      <h1>List</h1>
      {listItems.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {listItems.map((item) => {
          return (
            <li className="list-group-item" key={item.id}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
