import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Particles from 'react-particles-js';

//Importing Modal
import ModalSection from '../../components/common/ModalSection';

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
                <section className="bg-home home-full" id="home">       
                    <div className="bg-overlay">
                    <Particles
                        params={{
                            "particles": {
                                "number": {
                                    "value": 60,
                                    "density": {
                                        "enable": true,
                                        "value_area": 800
                                    }
                                },
                                "line_linked": {
                                    "enable": false
                                },
                                "move": {
                                    "speed": 4,
                                    "out_mode": "out"
                                },
                                "shape": {
                                    "type": [
                                        "star",
                                    ],
                                    "opacity": {
                                        "value": 0.5,
                                        "random": false,
                                        "anim": {
                                          "enable": false,
                                          "speed": 1,
                                          "opacity_min": 0.1,
                                          "sync": false
                                        }
                                    },
                                    "move": {
                                        "enable": true,
                                        "speed": 6,
                                        "direction": "none",
                                        "random": false,
                                        "straight": false,
                                        "out_mode": "out",
                                        "attract": {
                                          "enable": false,
                                          "rotateX": 600,
                                          "rotateY": 1200
                                        }
                                      }
                                },
                                "color": {
                                    "value": "#ffffff"
                                },
                                "size": {
                                    "value": 5,
                                    "random": true,
                                    "anim": {
                                        "enable": false,
                                        "speed": 40,
                                        "size_min": 0.1,
                                        "sync": false
                                    }
                                }
                            },
                            "retina_detect": false
                        }} />
                    </div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <Container className="slidero">
                                <Row className="justify-content-center">
                                    <Col md={12}>
                                        <div className="home-content text-white">
                                            <div className="watch-video mt-5">
                                            <Link onClick={this.callModal} to="#" className="video-play-icon-trigger text-white">
                                                    <i className="mdi mdi-play play-icon-circle play play-icon f-30"></i>
                                                </Link>
                                            </div>
                                            <h5 className="sub-title mt-4 text-white pt-2 text-uppercase">Xeril Template</h5>
                                            <h1 className="title mt-4 text-white text-uppercase">We're Giving Design <br/> Solution & Idea.</h1>

                                            <div className="search-form  mt-4 pt-3">
                                                <Form action="#">
                                                    <input type="text" placeholder="Email"/>
                                                    <Button type="submit" color="primary">SubCribe</Button>
                                                </Form>
                                            </div>
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