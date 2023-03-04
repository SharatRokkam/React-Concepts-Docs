import React from 'react';

const Child = (props) => {
  const { name, age, address } = props.person;
  return (
    <div>
      <h1>{name}, {age}</h1>
      <p>{address.street}, {address.city}, {address.state}</p>
    </div>
  );
};

export default Child;