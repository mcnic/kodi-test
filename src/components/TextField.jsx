import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';
import { parseStyle } from '../helpers/parseStyle';

export default function TextField({ id }) {
  const configs = useSelector(getConfigsValue);
  const [styles, setStyles] = useState();

  useEffect(() => {
    const { __styles } = configs[id] || {};

    // console.log('TextField', webStyle);

    setStyles(__styles);
  }, [configs, id]);

  return <input type="text" style={styles} />;
}
