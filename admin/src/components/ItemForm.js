import React from "react";
import { Form, Row, Col, Button, CloseButton, Card } from "react-bootstrap";
import axios from "axios";

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.setModalItem= props.setModalItem;
    this.state.galleryDrop = this.state.gallery ? [...this.state.gallery] : [];
    this.state.galleryDrop = this.state.galleryDrop.map((imgPath, id) => {return {order: id, imgPath: imgPath, id: id}});
    this.counter = this.state.galleryDrop.length;
    this.state.drag = false;
    this.category = props.category;
    this.state.currentIMG = {imgPath: "http://127.0.0.1:5050/upload/e46375b6-8723-476e-a73e-38c4a07761f5.jpg"};
  }

  galleryPush(imgPath) {
    let gallery = [...this.state.galleryDrop, {order: Date.now() , imgPath: imgPath, id: Date.now()}];
    console.log(gallery);
    this.setState({galleryDrop: gallery});
  }

  galleryDelete(imgPath) {
    let gallery = [...this.state.galleryDrop].filter( (img) => img.imgPath !== imgPath);
    this.setState({galleryDrop: gallery});
  }

  dragPreviewStart(e, img) {
    console.log('drag',img);
    this.setState({currentIMG: {...img}})
  }

  dragPreviewLeave(e) {
  }

  dragPreviewEnd(e) {
  }
  dragPreviewOver(e) {
    e.preventDefault();
  }

  previewDrop(e, img) {
    e.preventDefault();
    console.log('drop', img);
    this.setState({galleryDrop: this.state.galleryDrop.map(
      (imgMap) => {
        if (img.id !== this.state.currentIMG.id ) {
        if (imgMap.id === img.id) {
          return {...imgMap, order: this.state.currentIMG.order}
        };
        if (imgMap.id === this.state.currentIMG.id) {
          return {...imgMap, order: img.order}
        }
      } else {
        return imgMap;
      }
      }
    )})

  }


  onDropHandler(e) {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    if  (files) {
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
            <Form.Control as="textarea" rows={3} value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} placeholder="Описание"/>
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
                    {this.state.galleryDrop.length > 0 ? this.state.galleryDrop
                      .sort((a, b) => {
                        if (a.order > b.order) {
                          return 1
                        } else {
                          return -1;
                        }
                      })
                      .map((img) =>
                        <Card
                      key={img.imgPath}
                      style={{width: "100px", height: "100px", position: "relative"}}
                      draggable={true}
                      onDragStart={(e) => this.dragPreviewStart(e, img)}
                      onDragEnd={(e) => this.dragPreviewEnd(e)}
                      onDragLeave={(e) => this.dragPreviewLeave(e)}
                      onDragOver={(e) => this.dragPreviewOver(e)}
                      onDrop={(e) => this.previewDrop(e, img)}

                      >
                       <CloseButton
                       style={{position: 'absolute', top: 5, right: 10, fontSize: 32 }}
                       className={'text-danger'}
                       onClick={
                              () => {this.galleryDelete(img.imgPath)}
                       } />
                      <img
                      src={'http://127.0.0.1:5050' + img.imgPath}
                      style={{objectFit: 'cover', width: '100%', height: '100%' }}
                      />
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
