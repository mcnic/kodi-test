import TextBlock from '../../components/TextBlock';
import WrongBlock from '../../components/WrongBlock';
import TextArea from '../../components/TextArea';
import TextField from '../../components/TextField';
import ContainerBlock from '../../components/ContainerBlock';
import ImagetBlock from '../../components/ImagetBlock';
import ButtonBlock from '../../components/ButtonBlock';
import DropdownBlock from '../../components/DropdownBlock.jsx';

const getComponent = ({ type, id, __children }) => {
  let component;

  switch (type) {
    case 'container':
      component = <ContainerBlock id={id} {...{ children: __children }} />;
      break;
    case 'text':
      component = <TextBlock id={id} />;
      break;
    case 'textarea':
      component = <TextArea id={id} />;
      break;
    case 'textfield':
      component = <TextField id={id} />;
      break;
    case 'image':
      component = <ImagetBlock id={id} />;
      break;
    case 'button':
      component = <ButtonBlock id={id} />;
      break;
    case 'dropdown':
      component = <DropdownBlock id={id} />;
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
