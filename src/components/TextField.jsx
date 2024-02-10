import React from 'react';
import { useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';

export default function TextField({ id }) {
  const configs = useSelector(getConfigsValue);
  const { __styles } = configs[id] || {};
  // console.log('TextField', webStyle);

  return <input type="text" className="form-textfield" style={__styles} />;
}
