import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadItems } from '../../store/reducers/itemsSlice';
import { parseConfig } from '../factories/parseConfig';
import { myTestData } from '../mocks/myTestData';
import { loadAllConfig } from '../../store/reducers/configsSlice';
import { baseTestData } from '../mocks/baseTestData';
import { goalTestData } from '../mocks/goalTestData';

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
    loadConfig(goalTestData);
  }, [loadConfig]);

  const onSelect = useCallback(
    (event) => {
      let opt = '';
      switch (event.target.value) {
        case 'base':
          opt = baseTestData;
          break;
        case 'my':
          opt = myTestData;
          break;
        case 'goal':
          opt = goalTestData;
          break;

        default:
          break;
      }

      loadConfig(opt);
    },
    [loadConfig]
  );

  return (
    <>
      <h1>Left panel</h1>

      <label htmlFor="cfg-select">Choose a config:</label>

      <select name="condigs" id="cfg-select" onChange={onSelect}>
        <option value="">--Please choose an option--</option>
        <option value="base">base</option>
        <option value="my">test 1</option>
        <option value="goal">goal</option>
      </select>
    </>
  );
}
