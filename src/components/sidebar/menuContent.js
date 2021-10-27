import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

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

class NestedList extends React.Component {
  state = {
    mainField: [
      { name: "Products" },
      { name: "Where To Buy" },
      { name: "Be Inspired" },
      { name: "Company" },
    ],
  };
  handleClick = (e) => {
    this.setState({ [e]: !this.state[e] });
  };
  render() {
    const { classes } = this.props;
    const { mainCategories, subCategories } = this.props;
    return (
      <div style={{ margin: "90px 18px", background: "rgb(241, 241, 241)" }}>
        {this.state.mainField.map((item) => {
          return (
            <div key={item._id}>
              {item.name === "Products" ? (
                <div key={item._id}>
                  <ListItem
                    button
                    key={item.name}
                    onClick={this.handleClick.bind(this, item.name)}
                    style={{ background: "#80808070" }}
                  >
                    <ListItemText primary={item.name} />
                    {this.state[item.name] ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse
                    key={item._id}
                    component="li"
                    in={this.state[item.name]}
                    timeout="auto"
                    unmountOnExit
                  >
                    {mainCategories &&
                      mainCategories.map((sitem) => {
                        return (
                          <div key={sitem._id}>
                            <div key={sitem._id}>
                              <ListItem
                                style={{ background: "#80808042" }}
                                button
                                key={sitem._id}
                                onClick={this.handleClick.bind(
                                  this,
                                  sitem.category_name
                                )}
                              >
                                <ListItemText primary={sitem.category_name} />
                                {this.state[sitem.category_name] ? (
                                  <ExpandLess />
                                ) : (
                                  <ExpandMore />
                                )}
                              </ListItem>
                              <Collapse
                                key={sitem._id}
                                component="li"
                                in={this.state[sitem.category_name]}
                                timeout="auto"
                                unmountOnExit
                              >
                                <List disablePadding>
                                  {subCategories &&
                                    subCategories.map((ssitem) =>
                                      ssitem.mainCategory._id === sitem._id ? (
                                        <Link to={ssitem.subCategory_slug}>
                                          <ListItem
                                            button
                                            key={ssitem._id}
                                            className={classes.nested}
                                          >
                                            <ListItemText
                                              key={ssitem._id}
                                              primary={ssitem.subCategory_name}
                                            />
                                          </ListItem>
                                        </Link>
                                      ) : (
                                        ""
                                      )
                                    )}
                                </List>
                              </Collapse>
                            </div>
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
      </div>
    );
  }
}
NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NestedList);
