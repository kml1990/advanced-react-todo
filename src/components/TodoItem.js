import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Badge,
  Row,
  Col
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { deleteTodo, updateTodo } from "../actions/todoActions";

class TodoItem extends Component {
  onDeleteClick = id => {
    this.props.deleteTodo(id);
  };

  onCompleteClick = (todo, completed) => {
    todo.completed = !completed;
    this.props.updateTodo(todo);
  };

  getCategoryName = (categoryId, categories) => {
    const cat = categories.find(x => x._id === categoryId);
    if (typeof cat !== "undefined") {
      return cat["name"];
    }
  };

  getTagName = (tagId, tags) => {
    const tag = tags.find(x => x._id === tagId);
    if (typeof tag !== "undefined") {
      return tag["name"];
    }
  };

  getDateState = date => {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let dueDate = new Date(date);
    dueDate.setHours(0, 0, 0, 0);

    if (dueDate.getTime() > today.getTime()) {
      return "text-primary";
    } else if (dueDate.getTime() == today.getTime()) {
      return "text-warning";
    } else {
      return "text-danger";
    }
  };

  render() {
    const todoItem = this.props.todoItem;
    const categories = this.props.categories;
    return (
      <div>
        <CSSTransition timeout={500} classNames="fade">
          <ListGroupItem
            className={
              todoItem.completed
                ? "toDo__list-item completed"
                : "toDo__list-item"
            }
          >
            <ListGroupItemHeading>
              <span className="toDo__title">{todoItem.name}</span>{" "}
              <Badge color="secondary">
                {this.getCategoryName(todoItem.category, categories)}
              </Badge>
              <div className="float-right toDo__actions">
                <a
                  className="text-primary"
                  href="#"
                  onClick={this.onCompleteClick.bind(
                    this,
                    todoItem,
                    todoItem.completed
                  )}
                >
                  <FontAwesomeIcon icon="check" />
                </a>
                <a className="text-primary" href="#">
                  <FontAwesomeIcon icon="edit" />
                </a>
                <a
                  className="text-primary"
                  href="#"
                  onClick={this.onDeleteClick.bind(this, todoItem._id)}
                >
                  <FontAwesomeIcon icon="trash-alt" />
                </a>
              </div>
            </ListGroupItemHeading>
            <ListGroupItemText className="truncate">
              {todoItem.description}
            </ListGroupItemText>
            <div className="list-goup-item-footer">
              <Row>
                <Col className="toDo__tags">
                  <div>
                    {JSON.parse(todoItem.tags).map(tag => (
                      <Badge key={tag.value} color="secondary">
                        {tag.label}
                      </Badge>
                    ))}
                  </div>
                </Col>
                <Col className="text-right">
                  <h6 className={this.getDateState(todoItem.dueDate)}>
                    <strong>Due: </strong>{" "}
                    {new Intl.DateTimeFormat("en-GB", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit"
                    }).format(new Date(todoItem.dueDate))}
                  </h6>
                  <h6>
                    <strong>Added: </strong>{" "}
                    {new Intl.DateTimeFormat("en-GB", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit"
                    }).format(new Date(todoItem.date))}
                  </h6>
                </Col>
              </Row>
            </div>
          </ListGroupItem>
        </CSSTransition>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
  tag: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo,
  category: state.category,
  tag: state.tag
});

export default connect(
  mapStateToProps,
  { deleteTodo, updateTodo }
)(TodoItem);