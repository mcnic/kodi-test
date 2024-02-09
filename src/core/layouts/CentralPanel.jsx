import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsValue } from '../../store/selectors/getItemsValue';
import componentsFactory from '../factories/componentsFactory';
import { addConfig } from '../../store/reducers/configsSlice';

export default function CentralPanel({ children }) {
  const storeItems = useSelector(getItemsValue);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // console.log('storeItems', storeItems);

    const newItems = storeItems.map((el) => {
      /*
        todo: make all object with all components and configs at once
      */
      const componentData = componentsFactory({ type: el.type, dispatch });
      dispatch(addConfig({ id: componentData.id, config: el }));
      return componentData;
    });
    setItems(newItems);
  }, [dispatch, storeItems]);

  return (
    <>
      {items.map((el) => (
        <Fragment key={el.id}>{el.component}</Fragment>
      ))}
    </>
  );
}
