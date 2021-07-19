import React from "react";
import PropTypes from "prop-types";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  root: {
    overflow: "hidden",
    paddingBottom: 0,
    width: "100%",
    maxWidth: "100%",
    background: theme.palette.background.paper,
  },
  nested: {
    background: "#c7c7c757",
    paddingLeft: theme.spacing.unit * 4,
  },
});
function getItems() {
  var json = {
    list: [
      {
        id: 1,

        items: [
          {
            id: 1,
            name: "PRODUCTS",
            subitems: [
              {
                id: 1,
                name: "Fabrics",
                subitems: [
                  { id: 1, name: "Valvet" },
                  { id: 2, name: "Silk" },
                  { id: 3, name: "Cotton" },
                  { id: 4, name: "Linen" },
                  { id: 4, name: "Faux Slik" },
                  { id: 4, name: "Sheers" },
                ],
              },

              {
                id: 2,
                name: "Curtain And Drapes",
                subitems: [
                  { id: 1, name: "Cellular Shades" },
                  { id: 2, name: "Custom Curtains" },
                  { id: 3, name: "Roller Shades" },
                  { id: 4, name: "Roman Shades" },
                ],
              },

              {
                id: 3,
                name: "Home Decore",
                subitems: [
                  { id: 1, name: "Custom Covers" },
                  { id: 2, name: "Dining Chair Covers" },
                  { id: 3, name: "Table Runners" },
                ],
              },

              {
                id: 4,
                name: "Bedding",
                subitems: [
                  { id: 1, name: "Duve Covers" },
                  { id: 2, name: "Sheets" },
                  { id: 3, name: "Shams And Pillows" },
                ],
              },
            ],
          },
        ],
      },

      {
        id: 2,
        items: [
          {
            id: 1,
            name: "BRANDS",
            subitems: [
              {
                id: 1,
                name: "Half Price Drapes",
                subitems: [
                  { id: 1, name: "" },
                  { id: 2, name: "" },
                  { id: 3, name: "" },
                  { id: 4, name: "" },
                ],
              },

              {
                id: 2,
                name: "Half Price Linens",
                subitems: [],
              },

              {
                id: 3,
                name: "Loom",
                subitems: [],
              },

              {
                id: 4,
                name: "Seirra Textiles",
                subitems: [],
              },
            ],
          },
        ],
      },

      {
        id: 3,
        items: [
          {
            id: 1,
            name: "WHERE TO BUY",
            subitems: [
              //   {
              //     id: 1,
              //     name: "Half Price Drapes",
              //     subitems: [
              //       { id: 1, name: "" },
              //       { id: 2, name: "" },
              //       { id: 3, name: "" },
              //       { id: 4, name: "" },
              //     ],
              //   },
              //   {
              //     id: 2,
              //     name: "Half Price Linens",
              //     subitems: [],
              //   },
              //   {
              //     id: 3,
              //     name: "Loom",
              //     subitems: [],
              //   },
              //   {
              //     id: 4,
              //     name: "Seirra Textiles",
              //     subitems: [],
              //   },
            ],
          },
        ],
      },

      {
        id: 4,
        items: [
          {
            id: 1,
            name: "BE INSPIRED",
            subitems: [
              //   {
              //     id: 1,
              //     name: "Half Price Drapes",
              //     subitems: [
              //       { id: 1, name: "" },
              //       { id: 2, name: "" },
              //       { id: 3, name: "" },
              //       { id: 4, name: "" },
              //     ],
              //   },
              //   {
              //     id: 2,
              //     name: "Half Price Linens",
              //     subitems: [],
              //   },
              //   {
              //     id: 3,
              //     name: "Loom",
              //     subitems: [],
              //   },
              //   {
              //     id: 4,
              //     name: "Seirra Textiles",
              //     subitems: [],
              //   },
            ],
          },
        ],
      },

      {
        id: 5,
        items: [
          {
            id: 1,
            name: "COMPANY",
            subitems: [
              {
                id: 1,
                name: "About us",
                subitems: [
                  { id: 1, name: "" },
                  { id: 2, name: "" },
                  { id: 3, name: "" },
                  { id: 4, name: "" },
                ],
              },
              {
                id: 2,
                name: "Meet Us",
                subitems: [],
              },
              {
                id: 3,
                name: "Contact us",
                subitems: [],
              },
              //   {
              //     id: 4,
              //     name: "Seirra Textiles",
              //     subitems: [],
              //   },
            ],
          },
        ],
      },
    ],
  };
  return json;
}
class NestedList extends React.Component {
  state = {};
  handleClick = (e) => {
    this.setState({ [e]: !this.state[e] });
  };
  render() {
    const items = getItems();
    const { classes } = this.props;
    return (
      <div style={{ margin: "90px 18px", background: "rgb(241, 241, 241)" }}>
        {items.list.map((list) => {
          return (
            <List
              className={classes.root}
              key={list.id}
              subheader={<ListSubheader>{list.title}</ListSubheader>}
            >
              {list.items.map((item) => {
                return (
                  <div key={item.id}>
                    {item.subitems != null ? (
                      <div key={item.id}>
                        <ListItem
                          button
                          key={item.id}
                          onClick={this.handleClick.bind(this, item.name)}
                          style={{ background: "#80808070" }}
                        >
                          <ListItemText primary={item.name} />
                          {this.state[item.name] ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )}
                        </ListItem>
                        <Collapse
                          key={list.items.id}
                          component="li"
                          in={this.state[item.name]}
                          timeout="auto"
                          unmountOnExit
                        >
                          {item.subitems.map((sitem) => {
                            return (
                              <div key={sitem.id}>
                                {sitem.subitems != null ? (
                                  <div key={sitem.id}>
                                    <ListItem
                                      style={{ background: "#80808042" }}
                                      button
                                      key={sitem.id}
                                      onClick={this.handleClick.bind(
                                        this,
                                        sitem.name
                                      )}
                                    >
                                      <ListItemText primary={sitem.name} />
                                      {this.state[sitem.name] ? (
                                        <ExpandLess />
                                      ) : (
                                        <ExpandMore />
                                      )}
                                    </ListItem>
                                    <Collapse
                                      key={sitem.subitems.id}
                                      component="li"
                                      in={this.state[sitem.name]}
                                      timeout="auto"
                                      unmountOnExit
                                    >
                                      <List disablePadding>
                                        {sitem.subitems.map((ssitem) => {
                                          return (
                                            <ListItem
                                              button
                                              key={ssitem.id}
                                              className={classes.nested}
                                            >
                                              <ListItemText
                                                key={ssitem.id}
                                                primary={ssitem.name}
                                              />
                                            </ListItem>
                                          );
                                        })}
                                      </List>
                                    </Collapse>
                                  </div>
                                ) : (
                                  <ListItem
                                    button
                                    onClick={this.handleClick.bind(
                                      this,
                                      item.name
                                    )}
                                    key={item.id}
                                  >
                                    <ListItemText primary={item.name} />
                                  </ListItem>
                                )}
                              </div>
                            );
                          })}
                        </Collapse>
                      </div>
                    ) : (
                      <ListItem
                        button
                        onClick={this.handleClick.bind(this, item.name)}
                        key={item.id}
                      >
                        <ListItemText primary={item.name} />
                      </ListItem>
                    )}
                  </div>
                );
              })}
            </List>
          );
        })}
      </div>
    );
  }
}
NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NestedList);
