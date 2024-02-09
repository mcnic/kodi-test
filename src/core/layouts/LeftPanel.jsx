import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/reducers/itemsSlice';

export default function LeftPanel() {
  const dispatch = useDispatch();

  const addElement = () => {
    examples.map((el) => dispatch(addItem(el)));
  };

  return (
    <>
      <h1>Lefl</h1>

      <button onClick={addElement}>add</button>
    </>
  );
}

const examples = [
  {
    type: 'text',
    data: {
      value:
        'Please leave us the email associated with your Nom Nom account and a brief description of the issue.',
    },
    style: {
      webStyle: {
        color: '#3D3935',
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        lineHeight: '22px',
        marginTop: '10px',
        textAlign: 'center',
        width: '100%',
      },
      actions: {
        onFocus: {},
        onHover: {},
      },
    },
  },
  {
    type: 'text1',
    data: {
      value:
        'Please leave us the email associated with your Nom Nom account and a brief description of the issue.',
    },
    style: {
      webStyle: {
        color: '#3D3935',
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        lineHeight: '22px',
        marginTop: '10px',
        textAlign: 'center',
        width: '100%',
      },
      actions: {
        onFocus: {},
        onHover: {},
      },
    },
  },
  {
    type: 'textfield',
    data: {
      placeholder: null,
      value: null,
    },
    style: {
      webStyle: {
        color: '#3D3935',
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
        fontSize: '15px',
        padding: '8px 0px',
        textTransform: 'none',
        'text-align': 'center',
        margin: '0 auto',
      },
      actions: {
        onFocus: {},
        onHover: {},
      },
    },
  },
];
