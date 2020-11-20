import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";

//Importing Modal
import ModalSection from '../../components/common/ModalSection';

//Import Images
import bg2 from "../../assets/images/bg-2.jpg";

class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.callModal.bind(this)
    }

    callModal = () => {
        this.refs.child.openModal();
    }
    
    render() {

        return (
            <React.Fragment>
                <section className="home-full" id="home" style={{backgroundImage: `url(${bg2})`}}>
                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <Container>
                                <Row className="justify-content-center vertical-content">
                                    <Col lg={8}>
                                        <div className="home-content text-white">
                                            <div className="watch-video">
                                                <Link onClick={this.callModal} to="#" className="video-play-icon-trigger text-white">
                                                    <i className="mdi mdi-play play-icon-circle play play-icon f-30"></i>
                                                </Link>
                                            </div>
                                            <h5 className="sub-title mt-4 text-white pt-2 text-uppercase">Xeril Template</h5>
                                            <h1 className="title mt-4 text-white text-uppercase">We're Giving Design <br/> Solution & Idea.</h1>
                                            <div className="pt-4 mt-1">
                                                <Link to="#" className="btn btn-outline-white mt-2 mr-3">Get Started</Link>
                                                <Link to="#" className="btn btn-primary ml-1 mt-2">Purchase Now</Link>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={4}>
                                        <div className="card mx-auto p-4 rounded mt-5 mt-lg-0">
                                            <div className="text-center">
                                                <p className="text-muted mb-2 f-13 text-uppercase">Welcome To Xeril</p>
                                                <h5 className="form-title mb-4">Get 30 Days Free Trial</h5>
                                            </div>
                                            <Form className="registration-form">
                                                <FormGroup className="mb-4">
                                                    <Label className="f-14">Your Name*</Label>
                                                    <Input type="text" className="form-control" id="nameSection" placeholder="" required/>
                                                </FormGroup>
                                                <FormGroup className="mb-4">
                                                    <Label className="f-14">Your Email*</Label>
                                                    <Input type="email" className="form-control" id="emailSection" placeholder="" required/>
                                                </FormGroup>
                                                <FormGroup className="mb-3">
                                                    <Label className="f-14">Password*</Label>
                                                    <Input type="password" className="form-control" id="password" placeholder="" required/>
                                                </FormGroup>
                                                <Button type="submit" color="primary" block size="sm">Get Started <i className="mdi mdi-telegram ml-2"></i></Button>
                                            </Form>
                                        </div>
                                    </Col>
                                    
                                </Row>
                                {/* Render ModalSection Component for Modal */}
                                <ModalSection ref="child" channel='vimeo' videoId='99025203' />
                            </Container>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;