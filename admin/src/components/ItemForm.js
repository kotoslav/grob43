import React from "react";
import { Form, Row, Col, Button, CloseButton, Card } from "react-bootstrap";
import axios from "axios";
import { $host } from "../http";

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.setModalItem = props.setModalItem;
    this.state.galleryDrop = this.state.gallery ? [...this.state.gallery] : [];
    this.state.galleryDrop = this.state.galleryDrop.map((imgPath, id) => {return {order: id, imgPath: imgPath, id: id}});
    this.counter = this.state.galleryDrop.length;
    this.state.drag = false;
    this.category = props.category;
    this.setForm = props.setForm;
  }

  passForm() {

    let gallery = this.state.galleryDrop
    .sort((a, b) => {
                        if (a.order > b.order) {
                          return 1
                        } else {
                          return -1;
                        }
                      })
    .map( pic => pic.imgPath);
    let form = {
      name: this.state.name,
      description: this.state.description,
      article: this.state.article,
      price: Number(this.state.price),
      categoryId: Number(this.state.categoryId),
      gallery: gallery
    };
    this.setForm(form);
  }

  galleryPush(imgPath) {
    let gallery = [...this.state.galleryDrop, {order: Date.now() , imgPath: imgPath, id: Date.now()}];
    this.setState({galleryDrop: gallery});
    this.state.galleryDrop = gallery;
    this.passForm()
  }

  galleryDelete(imgOrder) {
    let gallery = [...this.state.galleryDrop].filter( (img) => img.order !== imgOrder);
    this.setState({galleryDrop: gallery});
    this.state.galleryDrop = gallery;
    this.passForm()
  }

  dragPreviewStart(e, img) {
    this.setState({currentIMG: {...img}})
  }

  dragPreviewLeave(e) {
  }

  dragPreviewEnd(e) {
    this.passForm()
  }
  dragPreviewOver(e) {
    e.preventDefault();
  }

  previewDrop(e, img) {
    e.preventDefault();

    let files = [...e.dataTransfer.files];
    if (files.length === 0) {
    let gallery = this.state.galleryDrop.map(
      (imgMap) => {
        if (imgMap.id === img.id) {
          return {...imgMap, order: this.state.currentIMG.order}
        };
        if (imgMap.id === this.state.currentIMG.id) {
          return {...imgMap, order: img.order}
        }
        return imgMap;
      });

    this.setState({galleryDrop: gallery })
    this.state.galleryDrop = gallery;
    this.passForm();

    }
  }


  onDropHandler(e) {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    const fileExtensions = ['jpeg', 'jpg', 'png', 'webp', 'gif', 'svg']
    if  (files) {
      files.forEach( (file) => {
        if (fileExtensions.includes(file.name.split('.').at(-1).toLowerCase()) ) {
        const formData = new FormData();
        formData.append('img', file);
        $host.post( 'http://127.0.0.1:5050/api/gallery/', formData)
        .then( res => {
          this.galleryPush(res.data.imgPath);
        })
      }
      })
    }
    this.setState({drag: false});
  }


  render() {
    return (
      <Form onKeyUp={() => this.passForm()} onDrop={() => this.passForm()} onChange={() => this.passForm()}>
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
            <Form.Control type="number" value={this.state.price} onChange={(e) => this.setState({price: e.target.value})} placeholder="Стоимость"/>
          </Col>
        </Form.Group>

          <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2"  className={"input-group-text"} >Категория</Form.Label>
          <Col sm="10">
            <select className={"custom-select"} defaultValue={this.state.categoryId} onChange={(e) => {  this.state.categoryId = e.target.value ;this.setState({categoryId: e.target.value}) }} >
            {

              <option value={this.state.categoryId}>{
                this.category.categories.find(cat => cat.id == this.state.categoryId).title
              }</option>

            }
            {
              this.category.categories
              .filter(
                cat => cat.id !== this.category.selectedCategory.id
              )
              .map( cat =>
                <option key={cat.id} value={cat.id}>{cat.title}</option>
              )

            }
            </select>
          </Col>

        </Form.Group>


        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Галерея</Form.Label>


          <Card style={{width: "100%", height: 110}} className={`m-2 d-flex flex-row  ${ this.state.drag ? "border-primary" : ""} ` }
          onDragEnter={(e) => {
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
                      key={img.order}
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
                              () => {this.galleryDelete(img.order)}
                       } />
                      <img
                      src={'http://127.0.0.1:5050' + img.imgPath}
                      style={{objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                      </Card>
                    ):
                      <span
                      style={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      >Перетяните нужные изображения в эту область</span>
                    }
                  </Card>

        </Form.Group>
      </Form>
    );
  }
}

export default ItemForm
