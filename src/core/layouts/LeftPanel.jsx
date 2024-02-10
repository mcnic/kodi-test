import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, loadItems } from '../../store/reducers/itemsSlice';
import { parseConfig } from '../factories/parseConfig';
import { onlyComponentsTestData } from '../mocks/onlyComponentsTestData';
import { addConfig, loadAllConfig } from '../../store/reducers/configsSlice';
import { fullJsonTestData } from '../mocks/fullJsonTestData';

export default function LeftPanel() {
  const dispatch = useDispatch();

  const loadConfig = useCallback(
    (configJson) => {
      const parsedConfig = parseConfig(configJson);
      // console.log('parsedConfig', parsedConfig?.views);

      const items = parsedConfig?.views?.map(
        ({ type, __id, data, value, __children }) => ({
          type,
          __id,
          __children,
        })
      );

      const configs = {};

      const fillConfig = (children) => {
        children.forEach(({ __id, data, value, __children, __styles }) => {
          configs[__id] = { __id, __styles, data, value };

          __children && fillConfig(__children);
        });
      };

      fillConfig(parsedConfig?.views);

      dispatch(loadItems(items));
      dispatch(loadAllConfig(configs));
    },
    [dispatch]
  );

  useEffect(() => {
    loadConfig(fullJsonTestData);
  }, [loadConfig]);

  // const addElement = () => {
  //   dispatch(addItem(examples[0]));
  // };

  const onSelect = useCallback(
    (event) => {
      switch (event.target.value) {
        case 'base':
          loadConfig(fullJsonTestData);
          break;
        case 'my':
          loadConfig(onlyComponentsTestData);
          break;
        case 'goal':
          loadConfig(fullJsonTestData);
          break;

        default:
          break;
      }
    },
    [loadConfig]
  );

  return (
    <>
      <h1>Left</h1>

      <label htmlFor="cfg-select">Choose a config:</label>

      <select name="condigs" id="cfg-select" onChange={onSelect}>
        <option value="">--Please choose an option--</option>
        <option value="base">base</option>
        <option value="my">test 1</option>
        <option value="goal">Goal</option>
      </select>

      {/* <button onClick={addElement}>add</button> */}
    </>
  );
}
