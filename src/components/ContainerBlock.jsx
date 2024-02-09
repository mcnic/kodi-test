import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';
import { getChildComponents } from '../helpers/getChildComponents';

export default function ContainerBlock(props) {
  const { id, children } = props;
  // const dispatch = useDispatch();
  const configs = useSelector(getConfigsValue);
  const [childrens, setChildrens] = useState([]);
  const [styles, setStyles] = useState({});

  useEffect(() => {
    const { __styles } = configs[id] || {};

    console.log('ContainerBlock', props, configs[id], children);

    setStyles(__styles);

    setChildrens(getChildComponents(children));
    // const newChildren = children.map((el) => {
    //   // console.log('el', el);

    //   const componentData = componentsFactory({ type: el.type });
    //   dispatch(addConfig({ id: componentData.id, config: el }));
    //   return componentData;
    // });
    // setChildren(newChildren);
  }, [children, configs, id, props]);

  return (
    <div style={{ ...styles, border: '1px solid red', width: '100%' }}>
      {/* {JSON.stringify(childrens)} */}
      {childrens.map((el) => (
        <Fragment key={el.id}>{el.component}</Fragment>
      ))}
    </div>
  );
}
