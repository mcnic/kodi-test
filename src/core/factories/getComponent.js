import TextBlock from '../../components/TextBlock';
import WrongBlock from '../../components/WrongBlock';
import TextArea from '../../components/TextArea';
import TextField from '../../components/TextField';
import ContainerBlock from '../../components/ContainerBlock';

const getComponent = ({ type, id, __children }) => {
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
      component = <ContainerBlock id={id} {...{ children: __children }} />;
      break;
    default:
      component = <WrongBlock id={id} type={type} />;
  }

  return {
    id,
    component,
  };
};

export default getComponent;
