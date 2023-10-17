import React from "react";
import { Form, Row, Col, Button, CloseButton, Card } from "react-bootstrap";
import axios from "axios";

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.setModalItem= props.setModalItem;
    this.state.galleryDrop = this.state.gallery ? [...this.state.gallery] : [];
    this.state.drag = false;
  }

  galleryPush(imgPath) {
    let gallery = [...this.state.galleryDrop, imgPath]
    this.setState({galleryDrop: gallery});
  }

  galleryDelete(imgPath) {
    let gallery = [...this.state.galleryDrop].filter( (img) => img !== imgPath);
    this.setState({galleryDrop: gallery});
  }

  onDropHandler(e) {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    if  (files) {
      console.log(files);
      files.forEach( (file) => {
        const formData = new FormData();
        formData.append('img', file);

        axios.post( 'http://127.0.0.1:5050/api/gallery/', formData)
        .then( res => {
          this.galleryPush(res.data.imgPath);
        })

      })

    }
  }

  async sendFiles(files) {

  }

  render() {
    return (
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Наименование</Form.Label>
          <Col sm="10">
            <Form.Control value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} placeholder="Наименование"/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Описание</Form.Label>
          <Col sm="10">
            <Form.Control value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} placeholder="Описание"/>
          </Col>
        </Form.Group>


        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Артикул</Form.Label>
          <Col sm="10">
            <Form.Control value={this.state.article} onChange={(e) => this.setState({article: e.target.value})} placeholder="Артикул"/>
          </Col>
        </Form.Group>

          <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Стоимость</Form.Label>
          <Col sm="10">
            <Form.Control value={this.state.price} onChange={(e) => this.setState({price: e.target.value})} placeholder="Стоимость"/>
          </Col>
        </Form.Group>

          <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Категория</Form.Label>
          <Col sm="10">
            <Form.Control value={this.state.categoryId} onChange={(e) => this.setState({categoryId: e.target.value})} placeholder="Категория"/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Галерея</Form.Label>
          <Col sm="10">
            <Form.Control value={this.state.gallery} onChange={(e) => this.setState({gallery: e.target.value})} placeholder="Галерея"/>
          </Col>


          <Card style={{width: "100%", height: '100px'}} className={'m-2 d-flex align-items-center justify-content-center'}
          onDragStart={(e) => {
            e.preventDefault();
            this.setState({drag: true});
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            this.setState({drag: false});
          }}
           onDragOver={(e) => {
            e.preventDefault();
            this.setState({drag: true});
          }}
          onDrop={(e)=>this.onDropHandler(e)}

          >
          {!this.state.drag ? "Бросьте каку" : "Ловлю"}
          </Card>



          <Card style={{width: "100%"}} className={'m-2 d-flex flex-row'}>
                    {this.state.galleryDrop.length > 0 ? this.state.galleryDrop.map((img) =>
                      <Card key={img} style={{width: "100px", height: "100px", position: "relative"}}>
                       <CloseButton style={{position: 'absolute', top: 5, right: 10, fontSize: 32 }} className={'text-danger'}
                       onClick={
                              () => {this.galleryDelete(img)}
                      } />
                      <img src={'http://127.0.0.1:5050' + img} style={{objectFit: 'cover', width: '100%', height: '100%' }} />
                      </Card>
                    ):
                      <span>Нет изображений</span>
                    }
                  </Card>


        </Form.Group>
      </Form>
    );
  }
}

export default ItemForm
