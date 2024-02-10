import React from 'react';
import { useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function EndButton({ id }) {
  const configs = useSelector(getConfigsValue);
  const { data, __styles } = configs[id] ?? {};
  // console.log('EndButton', configs[id]);

  return (
    <button className="form-button form-end-button" style={__styles}>
      {data?.title}

      <i className="fa fa-chevron-right">
        <FontAwesomeIcon icon={faChevronRight} />
      </i>
    </button>
  );
}
