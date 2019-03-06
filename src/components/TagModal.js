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
  Label,
  Input,
  ListGroup,
  ListGroupItem,
  Collapse
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { addTag, deleteTag } from "../actions/tagsActions";

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

  addNewTag = e => {
    e.preventDefault();

    const newTag = {
      _id: uuid(),
      name: this.state.name,
      description: this.state.description
    };
    // Add todo via newTag action
    this.props.addTag(newTag);

    // Close tag modal
    this.props.toggleTagModal();
  };

  onDeleteTag = id => {
    this.props.deleteTag(id);
  };

  render() {
    const { tags } = this.props.tag;
    return (
      <Modal isOpen={this.props.tagModal} toggle={this.props.toggleTagModal}>
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
                {tags.map(tag => (
                  <ListGroupItem key={tag._id}>
                    <strong>{tag.name}</strong> - {tag.description}
                    <a
                      className="text-danger float-right"
                      href="#"
                      onClick={this.onDeleteTag.bind(this, tag._id)}
                    >
                      <FontAwesomeIcon icon="trash-alt" />
                    </a>
                  </ListGroupItem>
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
            <Button color="secondary" onClick={this.props.toggleTagModal}>
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
  { addTag, deleteTag }
)(TagModal);
