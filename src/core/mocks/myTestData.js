export const myTestData = `
{
  "views": [
    {
      "type": "text",
      "data": {
        "value": "Something Went Wrong"
      },
      "style": {
        "webStyle": {
          "display": "inline-block",
          "color": "#392F2C",
          "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
          "fontStyle": "normal",
          "fontWeight": 400,
          "fontSize": "32px",
          "lineHeight": "32px",
          "paddingRight": "48px"
        },
        "actions": {
          "onFocus": {},
          "onHover": {}
        }
      }
    },
    {
      "type": "textfield",
      "data": {
        "placeholder": null,
        "value": null
      },
      "style": {
        "webStyle": {
          "color": "#3D3935",
          "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
          "fontSize": "15px",
          "padding": "8px 0px",
          "textTransform": "none",
          "text-align": "center",
          "margin": "0 auto"
        },
        "actions": {
          "onFocus": {},
          "onHover": {}
        }
      }
    },
    {
      "type": "image",
      "value": "/img/uploadimg.png",
      "style": {
        "webStyle": {
          "width": "8px",
          "height": "13px",
          "display": "inline-block",
          "float": "left"
        },
        "actions": {
          "onFocus": {},
          "onHover": {}
        }
      }
    },
    {
      "type": "textarea",
      "data": {
        "placeholder": "",
        "value": null
      },
      "style": {
        "webStyle": {
          "color": "#3D3935",
          "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
          "padding": "15px",
          "borderStyle": "solid",
          "borderWidth": "1px",
          "borderColor": "#392F2C",
          "borderRadius": "4px"
        }
      }
    },
    {
      "type": "container",
      "style": {
        "webStyle": {
          "padding": "16px",
          "margin": "0",
          "width": "50px",
          "cursor": "pointer",
          "position": "relative",
          "left": "0"
        },
        "actions": {
          "onFocus": {},
          "onHover": {
            "backgroundColor": "#eee"
          }
        }
      },
      "children": [
        {
          "type": "text",
          "data": {
            "value": "child 1"
          },
          "style": {
            "webStyle": {
              "display": "inline-block",
              "color": "#392F2C",
              "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
              "fontStyle": "normal",
              "fontWeight": 400,
              "fontSize": "32px",
              "lineHeight": "32px",
              "paddingRight": "48px"
            },
            "actions": {
              "onFocus": {},
              "onHover": {}
            }
          }
        },
        {
          "type": "container",
          "style": {
            "webStyle": {
              "padding": "16px",
              "margin": "0",
              "width": "50px",
              "cursor": "pointer",
              "position": "relative",
              "left": "0"
            },
            "actions": {
              "onFocus": {},
              "onHover": {
                "backgroundColor": "#eee"
              }
            }
          },
          "children": [
            {
              "type": "text",
              "data": {
                "value": "child 2"
              },
              "style": {
                "webStyle": {
                  "display": "inline-block",
                  "color": "#392F2C",
                  "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
                  "fontStyle": "normal",
                  "fontWeight": 400,
                  "fontSize": "32px",
                  "lineHeight": "32px",
                  "paddingRight": "48px"
                },
                "actions": {
                  "onFocus": {},
                  "onHover": {}
                }
              }
            },
            {
              "type": "text",
              "data": {
                "value": "child 3"
              },
              "style": {
                "webStyle": {
                  "display": "inline-block",
                  "color": "#392F2C",
                  "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
                  "fontStyle": "normal",
                  "fontWeight": 400,
                  "fontSize": "32px",
                  "lineHeight": "32px",
                  "paddingRight": "48px"
                },
                "actions": {
                  "onFocus": {},
                  "onHover": {}
                }
              }
            }
          ]
        }

      ]
    }
  ]
}
`;
