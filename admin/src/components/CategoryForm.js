import React from "react";
import { Form, Row, Col } from "react-bootstrap";

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.setModalCategory = props.setModalCategory;
  }

  render() {
    return (
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Заголовок</Form.Label>
          <Col sm="10">
            <Form.Control value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} placeholder="Заголовок"/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Описание</Form.Label>
          <Col sm="10">
            <Form.Control value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} placeholder="Описание"/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">imgPath</Form.Label>
          <Col sm="10">
            <Form.Control value={this.state.imgPath} onChange={(e) => this.setState({imgPath: e.target.value})} placeholder="imgPath"/>
          </Col>
        </Form.Group>

      </Form>
    );
  }
}

export default CategoryForm
