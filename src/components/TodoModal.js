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
  state = {
    todoModal: false,
    catModal: false,
    tagModal: false,
    name: "",
    description: "",
    category: "",
    tags: [],
    dueDate: new Date()
  };

  toggleToDo = () => {
    this.setState({
      todoModal: !this.state.todoModal
    });
  };

  toggleCat = () => {
    this.setState({
      catModal: !this.state.catModal
    });
  };

  toggleTag = () => {
    this.setState({
      tagModal: !this.state.tagModal
    });
  };

  onChange = e => {
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

  addNewTodo = e => {
    e.preventDefault();

    const newTodo = {
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
    this.props.addTodo(newTodo);

    // Close todoModal
    this.toggleToDo();
  };

  render() {
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
        <Button color="dark" onClick={this.toggleToDo}>
          Add ToDo
        </Button>

        <Modal isOpen={this.state.todoModal} toggle={this.toggleToDo}>
          <ModalHeader toggle={this.toggleToDo}>Add Todo</ModalHeader>
          <Form>
            <ModalBody>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Add todo name"
                      onChange={this.onChange}
                    />
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
                      onChange={this.onChange}
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
                        <Button color="secondary" onClick={this.toggleCat}>
                          <FontAwesomeIcon icon="plus" />
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                    <CategoryModal
                      catModal={this.state.catModal}
                      toggleCat={this.toggleCat.bind(this)}
                    />
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
                        <Button color="secondary" onClick={this.toggleTag}>
                          <FontAwesomeIcon icon="plus" />
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                    <TagModal
                      tagModal={this.state.tagModal}
                      toggleCat={this.toggleTag.bind(this)}
                    />
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
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.addNewTodo}>
                Add To Do
              </Button>
              <Button color="secondary" onClick={this.toggleToDo}>
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
