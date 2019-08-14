import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Recycle extends Component {
  
  state = {
  recycles:[] 
  
  

  };
  
 
  componentDidMount() {this.loadRecycles()}
   
   //API.getRecycles().then(res=>console.log(res.data))
  // .then 
   
   //.then(res => this.setState({ recycles: res.data}))
     // .then(console.log(this.state))
     // .catch(err => console.log(err));
      
  
  loadRecycles = () => {
    API.getRecycles()
  //.then(res=>console.log(res.data))
  
  .then(res=>
     this.setState({recycles: res.data,})
  )
.then(res=>console.log(this.state))
  .catch(err => console.log(err));
    };


    

  render() {
    
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Leave Your Item at the Recycling Center
                
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>All Available Locations</h1>
              <p>
              {this.state.recycles.map(item => (
                <div>
                <h2>{item.bussinessName}</h2>
               <h3>{item.address}</h3> 
                <i>{item.synopsis}</i>
                </div>))}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Recycle

