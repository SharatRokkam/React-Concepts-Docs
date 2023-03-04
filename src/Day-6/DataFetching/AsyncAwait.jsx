import { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  
  async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
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
        //  Render the data
      ) : (
    //   Render a loading indicator or placeholder
      )}
    </div>
  );
}