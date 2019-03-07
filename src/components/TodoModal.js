import React, { Component } from "react";
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Row,
  Col
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";
import uuid from "uuid";

import { addTodo, updateTodo } from "../actions/todoActions";

class TodoModal extends Component {
  constructor() {
    super();
    
    this.state = {
      nameInvalid: false,
      todoItem: {
        _id: null,
        name: "",
        description: "",
        category: null,
        tags: [],
        dueDate: new Date(),
        date: null,
        completed: null
      }
    };
  }

  onInputChange = e => {
    let todoItem = Object.assign({}, this.state.todoItem);    //creating copy of object
    todoItem[e.target.name] = e.target.value;      
  
    this.setState({ todoItem });
  };

  onCategoryChange = e => {
    let todoItem = Object.assign({}, this.state.todoItem);    //creating copy of object
    todoItem.category = e.value;      
    this.setState({
      todoItem
    });
  };

  onTagsChange = e => {
    let todoItem = Object.assign({}, this.state.todoItem);    //creating copy of object
    todoItem.tags = JSON.stringify(e);      
    this.setState({
      todoItem
    });
  };

  onTodoSubmited = e => {
    e.preventDefault();
    if (this.state.name === "") {
      this.setState({
        nameInvalid: true
      });
    } else {
      this.setState(
        {
          nameInvalid: false
        },
        () => {
          const {_id, name, description, category, tags, dueDate, date, completed} = this.state.todoItem;
          const todo = {
            _id: _id == null ? uuid() : _id,
            name,
            description,
            category,
            tags,
            dueDate: new Date(dueDate),
            date: date == null ? new Date() : new Date(date),
            completed: completed == null ? false : completed
          };
          // Add todo via addTodo action
          if(this.state.todoItem._id === null){
            this.props.addTodo(todo);
          } else {
            this.props.updateTodo(todo);
          }

          /* Close category modal */
          this.props.toggleTodoModal();
        }
      );
    }
  };

  onTodoModalClose = () => {
    this.setState({
      todoItem: {
        _id: null,
        name: "",
        description: "",
        category: "",
        tags: [],
        dueDate: new Date(),
        date: null,
        completed: null
      }
    })

    this.props.toggleTodoModal();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.todoItem != null) {
      const { _id, name, description, category, tags, dueDate, date, completed } = prevProps.todoItem;
      this.setState({
        todoItem: {
          _id,
          name,
          description,
          category,
          tags,
          dueDate,
          date,
          completed
        },
      });
    }
  }

  render() {
    const { categories } = this.props.category;
    const catOptions = categories.map(category => {
      return { value: category._id, label: category.name };
    });

    const { tags } = this.props.tag;
    const tagsOptions = tags.map(tag => {
      return { value: tag._id, label: tag.name };
    });

    const selectedTags = this.state.todoItem.tags.length > 0 ? JSON.parse(this.state.todoItem.tags) : "";

    return (
      <div>
        <Modal
          isOpen={this.props.todoModal}
          toggle={this.onTodoModalClose}
        >
          <ModalHeader toggle={this.toggleToDo}>{this.state.todoItem._id !== null ? "Update " + this.state.todoItem.name : "Add Todo"}</ModalHeader>
          <Form onSubmit={this.onTodoSubmited}>
            <ModalBody>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="name">Name*</Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Add todo name"
                      value={this.state.todoItem.name}
                      onChange={this.onInputChange.bind(this)}
                      invalid={this.state.nameInvalid}
                    />
                    <FormFeedback>This field is required</FormFeedback>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                      type="textarea"
                      name="description"
                      id="description"
                      placeholder="Add todo descrption"
                      value={this.state.todoItem.description}
                      onChange={this.onInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="category">Category</Label>
                    <InputGroup>
                      <Select
                        value={catOptions.find(option => option.value === this.state.todoItem.category)}
                        name="category"
                        id="category"
                        onChange={this.onCategoryChange}
                        options={catOptions}
                      />
                      <InputGroupAddon addonType="append">
                        <Button
                          color="secondary"
                          onClick={this.props.toggleCategoryModal}
                        >
                          <FontAwesomeIcon icon="plus" />
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="tags">Tags</Label>
                    <InputGroup>
                      <Select
                        value={selectedTags}
                        isMulti
                        name="tags"
                        id="tags"
                        onChange={this.onTagsChange}
                        options={tagsOptions}
                      />
                      <InputGroupAddon addonType="append">
                        <Button
                          color="secondary"
                          onClick={this.props.toggleTagModal}
                        >
                          <FontAwesomeIcon icon="plus" />
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="dueDate">Due Date</Label>
                    <Input
                      type="date"
                      name="dueDate"
                      id="dueDate"
                      placeholder="Add todo due date"
                      value={new Date(this.state.todoItem.dueDate)}
                      onChange={this.onInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.addNewTodo}>
                {this.state.todoItem._id !== null ? "Update" : "Submit"}
              </Button>
              <Button color="secondary" onClick={this.onTodoModalClose}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

TodoModal.propTypes = {
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
  { addTodo, updateTodo }
)(TodoModal);
