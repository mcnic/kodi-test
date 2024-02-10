import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';
import { getChildComponents } from '../helpers/getChildComponents';

export default function ContainerBlock(props) {
  const { id, children } = props;
  const configs = useSelector(getConfigsValue);
  const [childrens, setChildrens] = useState([]);
  const [styles, setStyles] = useState({});

  useEffect(() => {
    const { __styles } = configs[id] || {};

    // console.log('ContainerBlock', props, configs[id], children);

    setStyles(__styles);

    setChildrens(getChildComponents(children));
  }, [children, configs, id, props]);

  return (
    <div className="form-container" style={styles}>
      {childrens.map((el) => (
        <Fragment key={el.id}>{el.component}</Fragment>
      ))}
    </div>
  );
}
