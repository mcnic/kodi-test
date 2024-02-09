import React from 'react';

export default function WrongBlock(props) {
  return (
    <div className="form-component">
      <h1>WrongBlock {'<' + props.type + '>'} </h1>
      {JSON.stringify(props)}
    </div>
  );
}
