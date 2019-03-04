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

import { addTag } from "../actions/tagsActions";

class TagModal extends Component {
  state = {
    tagCollapse: false,
    name: "",
    description: ""
  };

  toggleTagCollapse = () => {
    this.setState({
      tagCollapse: !this.state.tagCollapse
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onToggleTag = () => {
    this.props.toggleCat(this.state.tagModal);
  };

  addNewTag = e => {
    e.preventDefault();

    const newTag = {
      name: this.state.name,
      description: this.state.description
    };
    // Add todo via newTag action
    this.props.addTag(newTag);

    // Close todoModal
    this.onToggleTag();
  };

  render() {
    const { tags } = this.props.tag;
    return (
      <Modal isOpen={this.props.tagModal} toggle={this.onToggleTag}>
        <Form>
          <ModalHeader>Add Tag </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Add tag name"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                placeholder="Add tag description"
                onChange={this.onChange}
              />
            </FormGroup>
            <Collapse isOpen={this.state.tagCollapse}>
              <h5>Existing tags</h5>
              <br />
              <ListGroup>
                {tags.map(cat => (
                  <ListGroupItem key={cat._id}>{cat.name}</ListGroupItem>
                ))}
              </ListGroup>
            </Collapse>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleTagCollapse}>
              Show/Edit existing tags
            </Button>
            <Button color="primary" onClick={this.addNewTag}>
              Add Tag
            </Button>
            <Button color="secondary" onClick={this.onToggleTag}>
              Close
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}

TagModal.propTypes = {
  tag: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tag: state.tag
});

export default connect(
  mapStateToProps,
  { addTag }
)(TagModal);
