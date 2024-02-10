import React from 'react';
import { useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';

export default function Button({ id }) {
  const configs = useSelector(getConfigsValue);
  const { data, __styles } = configs[id] ?? {};
  // console.log('Button', configs[id]);

  return <button style={__styles}>{data?.title}</button>;
}
