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

import { addTodo } from "../actions/todoActions";

import CategoryModal from "./CategoryModal";
import TagModal from "./TagModal";

class TodoModal extends Component {
  constructor() {
    super();
    this.state = {
      nameInvalid: false,
      name: "",
      description: "",
      category: "",
      tags: [],
      dueDate: new Date()
    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCategoryChange = e => {
    this.setState({
      category: e.value
    });
  };

  onTagsChange = e => {
    this.setState({
      tags: JSON.stringify(e)
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
          const todo = {
            _id: uuid(),
            name: this.state.name,
            description: this.state.description,
            category: this.state.category,
            tags: this.state.tags,
            dueDate: new Date(this.state.dueDate),
            date: new Date(),
            completed: false
          };
          // Add todo via addTodo action
          this.props.addTodo(todo);

          /* Close category modal */
          this.props.toggleTodoModal();
        }
      );
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate in TodoModal");
    if (prevProps.todoItem != null) {
      const { name, description, category, tags, dueDate } = prevProps.todoItem;
      this.setState({
        name: name,
        description: description,
        category: category,
        tags: tags,
        dueDate: dueDate
      });
    }
  }

  render() {
    console.log("render in TodoModal");
    const { categories } = this.props.category;
    const catOptions = categories.map(category => {
      return { value: category._id, label: category.name };
    });

    const { tags } = this.props.tag;
    const tagsOptions = tags.map(tag => {
      return { value: tag._id, label: tag.name };
    });

    return (
      <div>
        <Modal
          isOpen={this.props.todoModal}
          toggle={this.props.toggleTodoModal}
        >
          <ModalHeader toggle={this.toggleToDo}>Add Todo</ModalHeader>
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
                      value={this.state.name}
                      onChange={this.onInputChange}
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
                      value={this.state.description}
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
                        value={this.category}
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
                        value={this.tags}
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
                      value={new Date(this.state.dueDate)}
                      onChange={this.onInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.addNewTodo}>
                Add To Do
              </Button>
              <Button color="secondary" onClick={this.props.toggleTodoModal}>
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
  { addTodo }
)(TodoModal);
