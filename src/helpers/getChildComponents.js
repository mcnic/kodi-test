import getComponent from '../core/factories/getComponent';

export const getChildComponents = (children) => {
  return children.map(({ type, __id: id, __children }) => {
    const componentData = getComponent({
      type,
      id,
      __children,
    });

    return {
      id,
      component: componentData.component,
    };
  });
};
