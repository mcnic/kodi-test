import React from 'react';

export default function WrongBlock(props) {
  return (
    <div className="form-component">
      <h1>Wrong Item &lt;{props.type}&gt; </h1>
    </div>
  );
}
