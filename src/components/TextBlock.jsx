import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';

export default function TextBlock({ id }) {
  const configs = useSelector(getConfigsValue);
  const [text, setText] = useState();
  const [styles, setStyles] = useState();

  useEffect(() => {
    const { data, style } = configs[id];

    // console.log('TextBlock', data, style);

    setText(data?.value || 'no name');
    setStyles(style);
  }, [configs, id]);

  return (
    <div className="form-component">
      <h3>{text}</h3>
      <div className="noscroll">{JSON.stringify(styles)}</div>
    </div>
  );
}
