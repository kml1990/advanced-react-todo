import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import uuid from "uuid";
import {
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
  ListGroup,
  ListGroupItem,
  Collapse
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { addCategory, deleteCategory } from "../actions/categoriesActions";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

class CategoryModal extends Component {

  constructor() {
    super();
    this.state = {
      catCollapse: false,
      nameInvalid: false,
      name: "",
      description: "",
    };
  }
  

  toggleCategoryCollapse = () => {
    this.setState({
      catCollapse: !this.state.catCollapse
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  onCategorySubmited = e => {
    e.preventDefault();
    if(this.state.name === "") {
      this.setState({
        nameInvalid: true
      })
    } else {
      this.setState({
        nameInvalid: false
      }, () => {
        const category = {
          _id: uuid(),
          name: this.state.name,
          description: this.state.description
        };
        // Add todo via newCategory action
        this.props.addCategory(category);
    
        /* Close category modal */
        this.props.toggleCategoryModal();
      })
    }
  };

  onDeleteCategory = id => {
    this.props.deleteCategory(id);
  };

  render() {
    const { categories } = this.props.category;
    return (
      <Modal isOpen={this.props.categoryModal} toggle={this.props.toggleCategoryModal}>
        <Form onSubmit={this.onCategorySubmited}>
          <ModalHeader>Add Category </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Name*</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Add category name"
                onChange={this.onChange}
                invalid={this.state.nameInvalid}
              />
              <FormFeedback>This field is required</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                placeholder="Add category description"
                onChange={this.onChange}
              />
            </FormGroup>
            <Collapse isOpen={this.state.catCollapse}>
              <h5>Existing categories</h5>
              <br />
              <ListGroup>
                {categories.map(cat => (
                  <ListGroupItem key={cat._id}>
                    <strong>{cat.name}</strong> - {cat.description}
                    <a
                      className="text-danger float-right"
                      href="#"
                      onClick={this.onDeleteCategory.bind(this, cat._id)}
                    >
                      <FontAwesomeIcon icon="trash-alt" />
                    </a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Collapse>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleCategoryCollapse}>
              Show/Edit existing categories
            </Button>
            <Button color="primary" type="submit">
              Add Category
            </Button>
            <Button color="secondary" onClick={this.props.toggleCategoryModal}>
              Close
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}

CategoryModal.propTypes = {
  category: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  category: state.category
});

export default connect(
  mapStateToProps,
  { addCategory, deleteCategory }
)(CategoryModal);
