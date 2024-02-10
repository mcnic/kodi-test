import React from 'react';
import { useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';

export default function ImagetBlock({ id }) {
  const configs = useSelector(getConfigsValue);
  const { value, __styles } = configs[id] || {};
  // console.log('ImagetBlock', configs[id]);

  return <img src={value} className="form-image" tyle={__styles} alt="?" />;
}
