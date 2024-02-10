import React from 'react';
import { useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';

export default function TextField({ id }) {
  const configs = useSelector(getConfigsValue);
  const { __styles, data } = configs[id] ?? {};
  const { value } = data ?? {};
  // console.log('TextField', configs[id]);

  return (
    <input
      type="text"
      className="form-textfield"
      style={__styles}
      defaultValue={value}
    />
  );
}
