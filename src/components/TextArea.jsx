import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';
import { parseStyle } from '../helpers/parseStyle';

export default function TextArea({ id }) {
  const configs = useSelector(getConfigsValue);
  const [styles, setStyles] = useState();

  useEffect(() => {
    const { __styles } = configs[id] || {};

    // console.log('TextArea', webStyle);

    setStyles(__styles);
  }, [configs, id]);

  return <textarea id={id} style={styles}></textarea>;
}
