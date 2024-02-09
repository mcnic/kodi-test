import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsValue } from '../../store/selectors/getItemsValue';
import { getChildComponents } from '../../helpers/getChildComponents';

export default function CentralPanel({ children }) {
  const storeItems = useSelector(getItemsValue);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('storeItems', storeItems);

    setItems(getChildComponents(storeItems));
  }, [dispatch, storeItems]);

  return (
    <>
      {items.map((el) => (
        <Fragment key={el.id}>{el.component}</Fragment>
      ))}
    </>
  );
}
