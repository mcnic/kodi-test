import React from 'react';
import { useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';

export default function DropdownBlock({ id }) {
  const configs = useSelector(getConfigsValue);
  const { data, __styles } = configs[id] || {};
  console.log('DropdownBlock', configs[id]);

  return <div style={__styles}>{data?.value}</div>;
}
