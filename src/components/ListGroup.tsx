function ListGroup() {
  let items = ["raj", "raj2", "raj3", "raj4", "And a fifth raj"];
  items = [];

  if (items.length === 0) {
    return (
      <>
        <h1>Hello</h1>
        <p>Empty list</p>
      </>
    );
  }

  return (
    <>
      <h1>Hello</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
