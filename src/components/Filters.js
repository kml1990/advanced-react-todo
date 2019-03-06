import React, { Component } from "react";
import { Nav, NavItem, NavLink, Badge } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Filters extends Component {
  state = {
    currentFilter: "All"
  };

  getCategoryCount = (categoryId, todos) => {
    const todoCount = todos.filter(x => x.category === categoryId).length;
    return todoCount;
  };

  getCompletedCount = todos => {
    const todoCompletedCount = todos.filter(x => x.completed === true).length;
    return todoCompletedCount;
  };

  getActiveCount = todos => {
    const todoActiveCount = todos.filter(x => x.completed === false).length;
    return todoActiveCount;
  };

  onFilterChange = (type, value, current) => {
    this.setState({
      currentFilter: current
    });
    this.props.controlFilter(type, value, current);
  };

  render() {
    const { todos } = this.props.todo;
    const { categories } = this.props.category;
    const { tags } = this.props.tag;

    return (
      <div>
        <p>
          <FontAwesomeIcon icon="filter" /> Filters
        </p>
        <Nav vertical>
          <NavItem>
            <NavLink
              href="#"
              onClick={() => this.onFilterChange("general", "all", "All")}
              active={this.state.currentFilter === "All"}
            >
              All{" "}
              <span className="float-right">
                <Badge pill>{todos.length}</Badge>
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              onClick={() => this.onFilterChange("completed", false, "Active")}
              active={this.state.currentFilter === "Active"}
            >
              Active{" "}
              <span className="float-right">
                <Badge pill>{this.getActiveCount(todos)}</Badge>
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              onClick={() =>
                this.onFilterChange("completed", true, "Completed")
              }
              active={this.state.currentFilter === "Completed"}
            >
              Completed{" "}
              <span className="float-right">
                <Badge pill>{this.getCompletedCount(todos)}</Badge>
              </span>
            </NavLink>
          </NavItem>
        </Nav>
        <hr />
        <p>
          <FontAwesomeIcon icon="sitemap" /> Categories{" "}
          <a href="#" className="float-right" onClick={this.props.toggleCategoryModal}>
            <FontAwesomeIcon size="sm" icon="plus" />
          </a>
        </p>
        <Nav vertical>
          {categories.map(cat => (
            <NavItem key={cat._id}>
              <NavLink
                href="#"
                onClick={() =>
                  this.onFilterChange("category", cat._id, cat.name)
                }
                active={this.state.currentFilter === cat.name}
              >
                {cat.name}
                <span className="float-right">
                  <Badge pill>{this.getCategoryCount(cat._id, todos)}</Badge>
                </span>
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <hr />
        <p>
          <FontAwesomeIcon icon="tags" /> Tags{" "}
          <a href="#" className="float-right" onClick={this.props.toggleTagModal}>
            <FontAwesomeIcon size="sm" icon="plus" />
          </a>
        </p>
        {tags.map(tag => (
          <a
            key={tag._id}
            href="#"
            className={`tags-list ${
              this.state.currentFilter === tag.name ? "active" : ""
            }`}
            onClick={() => this.onFilterChange("tag", tag._id, tag.name)}
          >
            <Badge pill>{tag.name}</Badge>
          </a>
        ))}
      </div>
    );
  }
}

Filters.propTypes = {
  todo: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
  tag: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo,
  category: state.category,
  tag: state.tag
});

export default connect(mapStateToProps)(Filters);
