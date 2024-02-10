import React from 'react';
import { useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';

export default function TextBlock({ id }) {
  const configs = useSelector(getConfigsValue);
  const { data, __styles } = configs[id] ?? {};
  // console.log('TextBlock', configs[id]);

  return <div style={__styles}>{data?.value}</div>;
}
