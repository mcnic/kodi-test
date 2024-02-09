import { v4 as uuid } from 'uuid';
import { addConfig } from '../../store/reducers/configsSlice';
import TextBlock from '../../components/TextBlock';
import WrongBlock from '../../components/WrongBlock';
import TextArea from '../../components/TextArea';
import TextField from '../../components/TextField';
import ContainerBlock from '../../components/ContainerBlock';

const componentsFactory = (config) => {
  const { type } = config || {};
  const id = uuid();
  console.log('componentsFactory', type, config);

  let component;

  switch (type) {
    case 'text':
      component = <TextBlock id={id} />;
      break;
    case 'textarea':
      component = <TextArea id={id} />;
      break;
    case 'textfield':
      component = <TextField id={id} />;
      break;
    case 'container':
      component = <ContainerBlock id={id} />;
      break;
    default:
      component = <WrongBlock id={id} type={type} />;
  }

  // dispatch(addConfig({ id, config }));

  return {
    id,
    component,
    config,
  };
};

export default componentsFactory;
