/*
  color: '#3D3935',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '15px',
  lineHeight: '22px',
  textAlign: 'center',
  width: '100%',
  "backgroundColor": "#ffffff",
  "border": "1px solid #EE2737",
  "borderRadius": "3px",
  "borderStyle": "solid",
  "borderWidth": "1px",
  "borderColor": "#392F2C",
  "padding": "10px 20px",
  "text-transform": "none"
  "text-align": "center",
  "margin": "0 auto"
  marginTop: '10px',
*/

export const parseStyle = (rawStyle) => {
  const style = {};

  for (let el in rawStyle) {
    let key = el
      .split('-')
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join('');
    key = key.charAt(0).toLowerCase() + key.slice(1);
    // console.log(el, key);
    style[key] = rawStyle[el];
  }

  return style;
};
