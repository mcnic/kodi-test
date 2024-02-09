import { v4 as uuid } from 'uuid';
import TextBlock from '../../components/TextBlock';
import WrongBlock from '../../components/WrongBlock';
import { addConfig } from '../../store/reducers/configsSlice';

const componentsFactory = ({ type, styles, children }) => {
  const id = uuid();
  let component;
  // console.log(type, styles, children);

  switch (type) {
    case 'text':
      component = <TextBlock id={id} />;
      break;
    default:
      component = <WrongBlock id={id} type={type} />;
  }

  addConfig();

  return {
    id,
    component,
  };
};

export default componentsFactory;
