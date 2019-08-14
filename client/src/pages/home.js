import React, { Component } from "react";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from "react-bootstrap/Button";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class Home extends Component {

  handleClickRecycle = () => {
    this.props.history.push("./recycle");
}
handleClickItem = () => {
  this.props.history.push("./items");
}
    
    render() {
    
return (
<Container fluid>
<Row>
  <Col size="md-12">
    <Jumbotron>
      <h1>
      Do You Want To Take It or Leave It
      </h1>
    </Jumbotron>
  </Col>
</Row>
<Row>
  <Col size="md-12 md-offset-1">
  
  <div className="d-flex flex-column" length="auto">
  <ButtonGroup size="lg">
    <Button onClick={this.handleClickRecycle} type="button">Take It</Button>
    <Button>Log In</Button>
    <Button onClick={this.handleClickItem}>Leave It</Button>
  </ButtonGroup>

  
</div>

</Col>
</Row>

</Container>
);
}
};
export default Home