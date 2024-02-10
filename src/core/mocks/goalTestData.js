export const goalTestData = `
{
  "views": [
    {
      "type": "text",
      "data": {
        "value": "Order #1401356"
      },
      "style": {
        "webStyle": {
          "display": "inline-block",
          "color": "#392F2C",
          "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
          "fontStyle": "normal",
          "fontWeight": 400,
          "fontSize": "24px",
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
          "padding": "10px 0",
          "margin": "0",
          "display": "flex",
          "flex-direction": "column",
          "alignItems": "center",
          "backgroundColor": "#D25247"
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
            "value": "Did something go wrong?"
          },
          "style": {
            "webStyle": {
              "display": "inline-block",
              "color": "#FFFFFF",
              "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
              "fontStyle": "normal",
              "fontWeight": 400,
              "fontSize": "20px",
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
            "value": "Let us known how we can help."
          },
          "style": {
            "webStyle": {
              "display": "inline-block",
              "color": "#FFFFFF",
              "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
              "fontStyle": "normal",
              "fontWeight": 400,
              "fontSize": "20px",
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
    },
    {
      "type": "container",
      "style": {
        "webStyle": {
          "padding": "10px 0",
          "margin": "0",
          "display": "flex",
          "flex-direction": "column",
          "alignItems": "center"
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
          "type": "endbutton",
          "data": {
            "title": "My order was incomplete"
          },
          "style": {
            "webStyle": {
              "width": "100%",
              "height": "60px",
              "backgroundColor": "#ffffff",
              "borderRadius": "10px",
              "fontSize": "15px",
              "fontWeight": 700,
              "padding": "10px 20px",
              "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
              "display": "flex",
              "justifyContent": "space-between",
              "alignItems": "center",
              "box-shadow": "4px 4px 4px rgba(0, 0, 0, 0.2)",
              "cursor": "pointer"
            },
            "actions": {
              "onFocus": {
                "color": "#ffffff",
                "backgroundColor": "#EE2737"
              },
              "onHover": {
                "color": "#ffffff",
                "backgroundColor": "#EE2737"
              }
            }
          }
        },
        {
          "type": "endbutton",
          "data": {
            "title": "My order was late"
          },
          "style": {
            "webStyle": {
              "width": "100%",
              "height": "60px",
              "backgroundColor": "#ffffff",
              "borderRadius": "10px",
              "fontSize": "15px",
              "fontWeight": 700,
              "padding": "10px 20px",
              "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
              "display": "flex",
              "justifyContent": "space-between",
              "alignItems": "center",
              "box-shadow": "4px 4px 4px rgba(0, 0, 0, 0.2)",
              "cursor": "pointer"
            },
            "actions": {
              "onFocus": {
                "color": "#ffffff",
                "backgroundColor": "#EE2737"
              },
              "onHover": {
                "color": "#ffffff",
                "backgroundColor": "#EE2737"
              }
            }
          }
        },
        {
          "type": "text",
          "data": {
            "value": "Suggested amount to credit to the customer:"
          },
          "style": {
            "webStyle": {
              "display": "inline-block",
              "color": "#392F2C",
              "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
              "fontStyle": "normal",
              "fontWeight": 400,
              "fontSize": "16px",
              "width": "100%"
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
            "value": 10
          },
          "style": {
            "webStyle": {
              "color": "#3D3935",
              "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
              "fontSize": "15px",
              "padding": "8px 0px",
              "textTransform": "none",
              "text-align": "center",
              "margin": "0 auto",
              "border": "none",
              "borderBottom": "1px solid",
              "width": "100%"
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
            "value": "Amount to credit should be greater 0"
          },
          "style": {
            "webStyle": {
              "display": "inline-block",
              "color": "#392F2C",
              "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
              "fontStyle": "normal",
              "fontWeight": 400,
              "fontSize": "12px",
              "width": "100%",
              "margin-top": "-14px"
            },
            "actions": {
              "onFocus": {},
              "onHover": {}
            }
          }
        },
        {
          "type": "dropdown",
          "data": {
            "label": "Choose the reason:",
            "options": [
              "Quality",
              "Other"
            ]
          },
          "style": {
            "webStyle": {
              "display": "inline-block",
              "color": "#392F2C",
              "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
              "fontStyle": "normal",
              "fontWeight": 400,
              "fontSize": "12px",
              "border": "none",
              "borderBottom": "1px solid",
              "background-color": "#FFFFFF"
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
            "label": "Comments",
            "value": null
          },
          "style": {
            "webStyle": {
              "color": "#3D3935",
              "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
              "borderStyle": "solid",
              "borderWidth": "1px",
              "borderColor": "#392F2C",
              "borderRadius": "4px"
            }
          }
        },
        {
          "type": "button",
          "data": {
            "title": "Submit"
          },
          "style": {
            "webStyle": {
              "width": "100%",
              "color": "#FFFFF",
              "background-color": "#C5C5C5",
              "border": "1px solid #C5C5C5",
              "font-size": "18px",
              "font-weight": "700",
              "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
              "text-transform": "none",
              "height": "50px",
              "border-radius": "25px",
              "cursor": "pointer"
            },
            "actions": {
              "onFocus": {
                "color": "#ffffff",
                "backgroundColor": "#EE2737"
              },
              "onHover": {
                "color": "#ffffff",
                "backgroundColor": "#EE2737"
              }
            }
          }
        }
      ]
    }
  ]
}
`;
