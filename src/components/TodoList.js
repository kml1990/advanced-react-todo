import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Badge,
  Row,
  Col
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import { deleteTodo, updateTodo } from "../actions/todoActions";

class TodoList extends Component {

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
    } else if (dueDate.getTime() === today.getTime()) {
      return "text-warning";
    } else {
      return "text-danger";
    }
  };

  render() {
    const { todos } = this.props.todo;
    let filteredToDos = todos.filter(todo => {
      let type = this.props.filter.type;
      let value = this.props.filter.value;
      if (type === "general" && value === "all") {
        // return all
        return todo;
      } else if (type === "tag") {
        // search by tags
        let tags = JSON.parse(todo.tags);
        let hasTag = tags.filter(x => x.value === value).length !== 0;
        if (hasTag) {
          return todo;
        }
      } else {
        return todo[type] === value;
      }
    });
    //const { todos } = this.props.todo;
    const { categories } = this.props.category;

    return (
      <ListGroup className="todo">
      <TransitionGroup className="todo__list">
          {filteredToDos ? (
            filteredToDos.map(todo => (
              <CSSTransition key={todo._id} timeout={500} classNames="fade">
                <ListGroupItem
                  className={
                    todo.completed
                      ? "toDo__list-item completed"
                      : "toDo__list-item"
                  }
                >
                  <ListGroupItemHeading>
                    <span className="toDo__title">{todo.name}</span>{" "}
                    <Badge color="secondary">
                      {this.getCategoryName(todo.category, categories)}
                    </Badge>
                    <div className="float-right toDo__actions">
                      <a
                        className="text-primary"
                        href="#"
                        onClick={this.onCompleteClick.bind(
                          this,
                          todo,
                          todo.completed
                        )}
                      >
                        <FontAwesomeIcon icon="check" />
                      </a>
                      <a className="text-primary" href="#" onClick={this.props.editTodo.bind(this, todo)}>
                        <FontAwesomeIcon icon="edit" />
                      </a>
                      <a
                        className="text-primary"
                        href="#"
                        onClick={this.onDeleteClick.bind(this, todo._id)}
                      >
                        <FontAwesomeIcon icon="trash-alt" />
                      </a>
                    </div>
                  </ListGroupItemHeading>
                  <ListGroupItemText className="truncate">
                    {todo.description}
                  </ListGroupItemText>
                  <div className="list-goup-item-footer">
                    <Row>
                      <Col className="toDo__tags">
                        <div>
                          {(todo.tags.length !== 0 ? JSON.parse(todo.tags).map(tag => (
                            <Badge key={tag.value} color="secondary">
                              {tag.label}
                            </Badge>
                          )) : "")}
                        </div>
                      </Col>
                      <Col>
                        <div className="text-right">
                          <h6 className={this.getDateState(todo.dueDate)}>
                            <strong>Due: </strong>{" "}
                            {new Intl.DateTimeFormat("en-GB", {
                              year: "numeric",
                              month: "short",
                              day: "2-digit"
                            }).format(new Date(todo.dueDate))}
                          </h6>
                          <h6>
                            <strong>Added: </strong>{" "}
                            {new Intl.DateTimeFormat("en-GB", {
                              year: "numeric",
                              month: "short",
                              day: "2-digit"
                            }).format(new Date(todo.date))}
                          </h6>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </ListGroupItem>
              </CSSTransition>
            ))
          ) : (
            <h1>No todos</h1>
          )}
        </TransitionGroup>
      </ListGroup>
    );
  }
}

TodoList.propTypes = {
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
)(TodoList);
