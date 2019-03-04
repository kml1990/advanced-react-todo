import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  ListGroup,
  ListGroupItem,
  Collapse
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addCategory } from "../actions/categoriesActions";

class CategoryModal extends Component {
  state = {
    catCollapse: false,
    name: "",
    description: ""
  };

  toggleCategoryCollapse = () => {
    this.setState({
      catCollapse: !this.state.catCollapse
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onToggleCat = () => {
    this.props.toggleCat(this.state.catModal);
  };

  addNewCategory = e => {
    e.preventDefault();

    const newCategory = {
      name: this.state.name,
      description: this.state.description
    };
    // Add todo via newCategory action
    this.props.addCategory(newCategory);

    // Close todoModal
    this.onToggleCat();
  };

  render() {
    const { categories } = this.props.category;
    return (
      <Modal isOpen={this.props.catModal} toggle={this.onToggleCat}>
        <Form>
          <ModalHeader>Add Category </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Add category name"
                onChange={this.onChange}
              />
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
                  <ListGroupItem key={cat._id}>{cat.name}</ListGroupItem>
                ))}
              </ListGroup>
            </Collapse>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleCategoryCollapse}>
              Show/Edit existing categories
            </Button>
            <Button color="primary" onClick={this.addNewCategory}>
              Add Category
            </Button>
            <Button color="secondary" onClick={this.onToggleCat}>
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
  { addCategory }
)(CategoryModal);
