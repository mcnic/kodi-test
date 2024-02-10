import React from 'react';
import { useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';

export default function ButtonBlock({ id }) {
  const configs = useSelector(getConfigsValue);
  const { data, __styles } = configs[id] || {};
  // console.log('ButtonBlock', configs[id]);

  return <button style={__styles}>{data?.title}</button>;
}
