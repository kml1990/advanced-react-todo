import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Filters from "./Filters";
import TodoList from "./TodoList";
import TodoModal from "./TodoModal";

import { getTodos } from "../actions/todoActions";
import { getCategories } from "../actions/categoriesActions";
import { getTags } from "../actions/tagsActions";

class ToDo extends Component {
  componentDidMount() {
    this.props.getTodos();
    this.props.getCategories();
    this.props.getTags();
  }

  state = {
    filter: {
      type: "general",
      value: "all",
      current: "All"
    },
    dropdownOpen: false
  };

  controlFilter = (type, value, current) => {
    var newFilter = { type, value, current };
    this.setState({
      filter: newFilter
    });
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    return (
      <Container fluid className="custom-fluid">
        <Row>
          <Col>
            <h2 className="font-weight-light">Todo List</h2>
          </Col>
          <Col className="text-right">
            <TodoModal />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm="3" className="filters">
            <Filters
              filter={this.state.filter}
              controlFilter={this.controlFilter}
            />
          </Col>
          <Col sm="9">
            <Row>
              <Col>
                <p>
                  Showing: <strong>{this.state.filter.current}</strong>
                </p>
              </Col>
              <Col className="text-right">
                <ButtonDropdown
                  size="sm"
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggle}
                >
                  <DropdownToggle caret className="custom-filter">
                    Newest
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Newest</DropdownItem>
                    <DropdownItem>Oldest</DropdownItem>
                    <DropdownItem>Due today</DropdownItem>
                    <DropdownItem>Due tomorrow</DropdownItem>
                    <DropdownItem>Due this week</DropdownItem>
                    <DropdownItem>Ending Soon</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </Col>
            </Row>
            <TodoList filter={this.state.filter} />
          </Col>
        </Row>
      </Container>
    );
  }
}

ToDo.propTypes = {
  getTodos: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  getTags: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo,
  category: state.category,
  tag: state.tag,
  filter: state.filter
});

export default connect(
  mapStateToProps,
  { getTodos, getCategories, getTags }
)(ToDo);
