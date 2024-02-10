import React from 'react';
import { useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';

export default function TextArea({ id }) {
  const configs = useSelector(getConfigsValue);
  const { __styles, data } = configs[id] ?? {};
  const { placeholder, title, label, rows = 5 } = data ?? {};
  // console.log('TextArea', configs[id]);

  return (
    <div className="form-textarea">
      <label htmlFor={id} className="form-textarea-label">
        {label}
      </label>
      <textarea
        id={id}
        className="form-teaxarea"
        style={__styles}
        placeholder={placeholder}
        title={title}
        rows={rows}
      ></textarea>
    </div>
  );
}
