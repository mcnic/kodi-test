import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';
import { parseStyle } from '../helpers/parseStyle';

export default function TextBlock({ id }) {
  const configs = useSelector(getConfigsValue);
  const [text, setText] = useState('');
  const [styles, setStyles] = useState();

  useEffect(() => {
    const { data, style } = configs[id] || {};
    setText(data?.value || '');

    const { webStyle } = style || {};

    console.log('TextBlock', webStyle);

    setStyles(parseStyle(webStyle));
  }, [configs, id]);

  return <div style={styles}>{text}</div>;
}
