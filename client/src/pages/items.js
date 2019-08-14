import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Items extends Component {
  state = {
    items: [],
    type: "",
    contact: "",
  description: ""
  };

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ items: res.data, type: "", contact: "",description: "" })
      )
      .catch(err => console.log(err));
  };

  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.type && this.state.description) {
      API.saveItem({
        type: this.state.type,
        contact: this.state.contact,
      description: this.state.description
      })
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Share an Item</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.type}
                onChange={this.handleInputChange}
                name="type"
                placeholder="type (required)"
              />
              <Input
                value={this.state.contact}
                onChange={this.handleInputChange}
                name="contact"
                placeholder="contact (required)"
              />
              <TextArea
                value={this.statedescription}
                onChange={this.handleInputChange}
                name="description"
                placeholder="description (Optional)"
              />
              <FormBtn
                
                onClick={this.handleFormSubmit}
              >
                Submit Item
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Items Available for Pickup</h1>
            </Jumbotron>
            {this.state.items.length ? (
              <List>
                {this.state.items.map(Item => (
                  <ListItem key={Item._id}>
                    <Link to={"/Items/" + Item._id}>
                      <strong>
                        {Item.type} by {Item.contact}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteItem(Item._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Items;
