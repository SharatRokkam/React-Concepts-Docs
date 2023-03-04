function List(props) {
  const items = props.items.map((item) => <li key={item.id}>{item.text}</li>);
  return <ul>{items}</ul>;
}

// const myList = [
//   { id: 1, text: "Item 1" },
//   { id: 2, text: "Item 2" },
//   { id: 3, text: "Item 3" },
// ];

export default List;
