import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getConfigsValue } from '../store/selectors/getConfigsValue';
import { parseStyle } from '../helpers/parseStyle';
import componentsFactory from '../core/factories/componentsFactory';
import { addConfig } from '../store/reducers/configsSlice';

export default function ContainerBlock({ id }) {
  const dispatch = useDispatch();
  const configs = useSelector(getConfigsValue);
  const [children, setChildren] = useState([]);
  const [styles, setStyles] = useState();

  useEffect(() => {
    const { style, children } = configs[id] || {};

    const { webStyle } = style || {};

    console.log('ContainerBlock', webStyle, children);

    setStyles(parseStyle(webStyle));

    // const newChildrens = children.map((el) => {
    //   // console.log('el', el);

    //   const componentData = componentsFactory({ type: el.type });
    //   dispatch(addConfig({ id: componentData.id, config: el }));
    //   return componentData;
    // });
    // setChildren(newChildrens);
  }, [configs, dispatch, id]);

  return (
    <div style={{ ...styles, border: '1px solid red', width: '100%' }}>
      {JSON.stringify(children)}
    </div>
  );
}
