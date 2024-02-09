import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/reducers/itemsSlice';
import { parseConfig } from '../factories/parseConfig';
import { onlyComponentsTestData } from '../mocks/onlyComponentsTestData';
import { addConfig } from '../../store/reducers/configsSlice';

export default function LeftPanel() {
  const dispatch = useDispatch();

  useEffect(() => {
    const newConfig = parseConfig(onlyComponentsTestData);
    console.log('newConfig', newConfig?.views);

    //todo make bulk Store operations
    newConfig?.views.forEach(
      ({ type, __id, data, value, __children, __styles }) => {
        dispatch(
          addItem({
            type,
            __id,
            __children,
          })
        );
        dispatch(
          addConfig({
            id: __id,
            config: { __id, __styles, data, value },
          })
        );
      }
    );

    // examples.map((el) => dispatch(addItem(el)));
  }, [dispatch]);

  const addElement = () => {
    dispatch(addItem(examples[0]));
  };

  return (
    <>
      <h1>Left</h1>

      <button onClick={addElement}>add</button>
    </>
  );
}

const examples = [
  {
    type: 'text',
    data: {
      value: 'Something Went Wrong',
    },
    style: {
      webStyle: {
        display: 'inline-block',
        color: '#392F2C',
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '32px',
        lineHeight: '32px',
        paddingRight: '48px',
        'text-align': 'center',
      },
      actions: {
        onFocus: {},
        onHover: {},
      },
    },
  },
  // {
  //   type: 'textarea',
  //   data: {
  //     placeholder: '',
  //     value: null,
  //   },
  //   style: {
  //     webStyle: {
  //       color: '#3D3935',
  //       fontFamily:
  //         "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  //       padding: '15px',
  //       borderStyle: 'solid',
  //       borderWidth: '1px',
  //       borderColor: '#392F2C',
  //       borderRadius: '4px',
  //     },
  //   },
  // },
  // {
  //   type: 'textfield',
  //   data: {
  //     placeholder: null,
  //     value: null,
  //   },
  //   style: {
  //     webStyle: {
  //       color: '#3D3935',
  //       fontFamily:
  //         "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  //       fontSize: '15px',
  //       padding: '8px 0px',
  //       textTransform: 'none',
  //       'text-align': 'center',
  //       margin: '0 auto',
  //     },
  //     actions: {
  //       onFocus: {},
  //       onHover: {},
  //     },
  //   },
  // },
  {
    type: 'container',
    style: {
      webStyle: {
        padding: '10px 0',
        margin: '0',
        textAlign: 'center',
      },
      actions: {
        onFocus: {},
        onHover: {
          backgroundColor: '#eee',
        },
      },
    },
    children: [
      {
        type: 'text',
        data: {
          value: 'Something Went Wrong',
        },
        style: {
          webStyle: {
            display: 'inline-block',
            color: '#392F2C',
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '32px',
            lineHeight: '32px',
            paddingRight: '48px',
          },
          actions: {
            onFocus: {},
            onHover: {},
          },
        },
      },
    ],
  },
  // {
  //   type: 'image',
  //   value: '/img/uploadimg.png',
  //   style: {
  //     webStyle: {
  //       width: '8px',
  //       height: '13px',
  //       display: 'inline-block',
  //       float: 'left',
  //     },
  //     actions: {
  //       onFocus: {},
  //       onHover: {},
  //     },
  //   },
  // },
  // {
  //   type: 'button',
  //   data: {
  //     title: 'Submit',
  //   },
  //   style: {
  //     webStyle: {
  //       width: '100%',
  //       color: '#EE2737',
  //       backgroundColor: '#ffffff',
  //       border: '1px solid #EE2737',
  //       borderRadius: '3px',
  //       fontSize: '15px',
  //       fontWeight: 700,
  //       padding: '10px 20px',
  //       fontFamily:
  //         "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  //       'text-transform': 'none',
  //     },
  //     actions: {
  //       onFocus: {
  //         color: '#ffffff',
  //         backgroundColor: '#EE2737',
  //       },
  //       onHover: {
  //         color: '#ffffff',
  //         backgroundColor: '#EE2737',
  //       },
  //     },
  //   },
  // },
];
