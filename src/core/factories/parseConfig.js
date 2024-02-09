import { v4 as uuid } from 'uuid';
import { parseStyle } from '../../helpers/parseStyle';

export const parseConfig = (jsonConfig) => {
  const config = JSON.parse(jsonConfig);
  const views = config.views;

  return { views: fillViews(views) };
};

const fillViews = (views) => {
  if (views === undefined) return undefined;

  for (let item of views) {
    item['__id'] = uuid();
    item['__children'] = fillViews(item['children']);
    item['__styles'] = parseStyle(item.style?.webStyle ?? {});
  }

  return views;
};
