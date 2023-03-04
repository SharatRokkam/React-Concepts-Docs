import { useState, useEffect } from "react";

const mockData = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 40 },
];

function MyComponent() {
  const [data, setData] = useState(null);

  async function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 1000);
    });
  }

  useEffect(() => {
    async function getData() {
      const fetchedData = await fetchData();
      setData(fetchedData);
    }
    getData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name} - {item.age}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MyComponent;
