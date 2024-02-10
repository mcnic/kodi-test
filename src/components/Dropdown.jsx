import React from 'react';
import { useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';

export default function Dropdown({ id }) {
  const configs = useSelector(getConfigsValue);
  const { data, __styles } = configs[id] ?? {};
  const { label, options } = data ?? {};
  // console.log('Dropdown', configs[id]);

  return (
    <div className="form-select">
      <label htmlFor={id}>{label}</label>

      <select id={id} style={__styles}>
        {options?.map((el, key) => (
          <option key={key} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
}
