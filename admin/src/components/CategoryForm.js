import React, { createRef } from "react";
import { Form, Row, Col, CloseButton, Card } from "react-bootstrap";
import { $host } from "../http";

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.state;
        this.setModalCategory = props.setModalCategory;
        this.setForm = props.setForm;
        this.state.gallery = this.state.imgPath ? [this.state.imgPath] : [];
        this.gallery = [];
        this.state.drag = false;
        this.filePicker = createRef();

        this.handlePick = () => {
            this.filePicker.current.click();
        }

        this.setValidForm = props.setValidForm;
        this.state.validTitle = true;
        this.state.validImgPath = true;

    }

    formValidation(form) {
        this.setState({ validTitle: this.validationTitle(form.title) })
        this.setState({ validImgPath: this.validationImgPath(form.imgPath) })
        let valid = this.validationTitle(form.title) && this.validationImgPath(form.imgPath);
        this.setValidForm(valid);
    }

    validationTitle(value) {
        return this.notEmpty(value);
    }

    validationImgPath(value) {
        return this.notEmpty(value);
    }

    notEmpty(value) {
        return Boolean(value !== 0 && value !== "" && value);
    }

    changeTitle(e) {
        this.setState({ title: e.target.value })
    }

    galleryPush(imgPath) {
        let gallery = [imgPath]
        this.setState({ gallery: gallery });
        this.passForm();
    }

    galleryDelete(imgPath) {
        let gallery = [...this.state.gallery].filter((img) => img !== imgPath);
        this.setState({ gallery: gallery });
        this.state.gallery = gallery;
        this.passForm();
    }

    passForm() {
        let form = {
            title: this.state.title,
            description: this.state.description,
            imgPath: this.state.gallery[0] ?? ""
        };
        this.setState({ imgPath: form.imgPath });
        this.formValidation(form);
        this.setForm(form);
    }


    onDropHandler(e) {
        e.preventDefault();
        let files = [...e.dataTransfer.files];
        this.uploadFiles(files);
        this.setState({ drag: false });
    }

    onInputFileChange(e) {
        let files = [...e.target.files];
        this.uploadFiles(files);
        this.setState({ drag: false });
    }

    uploadFiles(files) {
        const fileExtensions = ['jpeg', 'jpg', 'png', 'webp', 'gif', 'svg']
        if (files && !this.state.imgPath) {
            if (fileExtensions.includes(files[0].name.split('.').at(-1).toLowerCase())) {
                const formData = new FormData();
                formData.append('img', files[0]);

                $host.post('http://127.0.0.1:5050/api/gallery/', formData)
                    .then(res => {
                        this.galleryPush(res.data.imgPath);
                    })
            }
        }
    }



    render() {
        return (
            <Form onKeyUp={() => this.passForm()} onDrop={() => this.passForm()} >
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Заголовок</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            value={this.state.title}
                            onChange={(e) => this.changeTitle(e)}
                            placeholder="Заголовок"
                            className={`  ${this.state.validTitle ? "" : "border-danger"} `} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Описание</Form.Label>
                    <Col sm="10">
                        <Form.Control as="textarea" rows={3} value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} placeholder="Описание" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Изображение</Form.Label>

                    <input
                        style={{
                            opacity: 0,
                            widows: 0,
                            height: 0
                        }}
                        type="file"
                        accept="image/*, .png, .jpg, .gif, .web, .webp, .svg"
                        onChange={(e) => this.onInputFileChange(e)}
                        ref={this.filePicker}
                        onClick={(e) => { if (this.state.imgPath) { e.preventDefault(); alert("Для категории невозможно загрузить более одного изображения, удалите текущее прежде чем загрузить новое") } }}
                        multiple
                    />

                    <Card style={{ width: "100%", height: '100px' }} className={`m-2 d-flex flex-row  ${this.state.drag ? "border-primary" : ""} ${this.state.validImgPath ? "" : "border-danger"}`}
                        onClick={this.handlePick}
                        onDragStart={(e) => {
                            e.preventDefault();
                            this.setState({ drag: true });
                        }}
                        onDragLeave={(e) => {
                            e.preventDefault();
                            this.setState({ drag: false });
                        }}
                        onDragOver={(e) => {
                            e.preventDefault();
                            this.setState({ drag: true });
                        }}
                        onDrop={(e) => this.onDropHandler(e)}
                    >

                        {this.state.gallery.length > 0 ? this.state.gallery.map((img) =>
                            <Card
                                key={img}
                                style={{ width: "100px", height: "100px", position: "relative" }}
                                onClick={
                                    (e) => { e.stopPropagation() }
                                }
                            >
                                <CloseButton style={{ position: 'absolute', top: 5, right: 10, fontSize: 32 }} className={'text-danger'}
                                    onClick={
                                        () => { this.galleryDelete(img) }
                                    } />
                                <img src={'http://127.0.0.1:5050' + img} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                            </Card>
                        ) :
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

export default CategoryForm
