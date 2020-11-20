import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ReactTextRotator from 'react-text-rotator';

//Importing Modal
import ModalSection from '../../components/common/ModalSection';

//Import Images
import bg4 from "../../assets/images/bg-4.jpg";

const RotateComponent = () => (

    <ReactTextRotator
      content={content}
      time={5000}
      startDelay={1500}
    />
);

const content = [
    {
        text: 'Perfect solution for small Business',
        animation: 'fade',
    },
    {
        text: 'Perfect solution for small Business',
        animation: 'fade',
    },
    {
        text: 'Perfect solution for small Business',
        animation: 'fade',
    },
];

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
                <section className="home-full" id="home" style={{backgroundImage: `url(${bg4})`}}>
                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col md={12}>
                                        <div className="home-content text-center text-white">
                                            <div className="watch-video mt-5">
                                                <Link onClick={this.callModal} to="#" className="video-play-icon-trigger text-white">
                                                    <i className="mdi mdi-play play-icon-circle play play-icon f-30"></i>
                                                </Link>
                                            </div>
                                            <h5 className="sub-title mt-4 text-white pt-2 text-uppercase">Xeril Template</h5>
                                            <h1 className=" mt-4 text-white text-uppercase">
                                                <div className="text-rotate">
                                                    <RotateComponent/>
                                                </div>
                                            </h1>
                                            <p className="text-white mt-4 f-18">Vivamus sodales eleifend odio eget mollis Cras consectetur nisi quis <br/> pulvinar
                                                laoreet Nulla facilisi Maecenas laoreet.</p>
                                            <div className="pt-4 mt-1">
                                                <Link to="#" className="btn btn-outline-white mt-2 mr-3">Get Started</Link>
                                                <Link to="#" className="btn btn-primary ml-1 mt-2">Purchase Now</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            {/* Render ModalSection Component for Modal */}
                            <ModalSection ref="child" channel='vimeo' videoId='99025203' />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;