import React, { useEffect } from 'react';

export default function TextBlock({ id, type, styles, children }) {
  useEffect(() => {
    console.log('id, type, slyle, children', id, type, styles, children);
  }, [id, children, styles, type]);

  return <div>TextBlock</div>;
}
