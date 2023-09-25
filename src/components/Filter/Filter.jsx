import React from 'react';

export const Filter = ({ value, handleFilterContacts }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input value={value} type="text" onChange={handleFilterContacts} />
    </div>
  );
};
