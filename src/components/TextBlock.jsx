import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';

export default function TextBlock({ id }) {
  const configs = useSelector(getConfigsValue);
  const [text, setText] = useState('');
  const [styles, setStyles] = useState();

  useEffect(() => {
    const { data, __styles } = configs[id] || {};
    setText(data?.value || '');

    console.log('TextBlock', id, configs, configs[id]);

    setStyles(__styles);
  }, [configs, id]);

  return <div style={styles}>{text}</div>;
}
