import React, { Component } from 'react';
import { Container, Row, Col, Media, FormGroup } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Images
import map from "../../assets/images/features/map.png";

class GetInTouch extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section" id="contact">
                    <Container>
                    <SectionTitle
                        title="Get In Touch"
                        subtitle="Contact"
                        desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
                    />
                        <Row className="mt-5 pt-2">
                            <Col lg={5}>
                                <div className="contact-info">
                                    <div style={{backgroundImage: `url(${map})`, backgroundRepeat : "no-repeat"}} >

                                        <Media>
                                            <i className="mdi mdi-map-marker text-primary h4"></i>
                                            <Media body className=" ml-4">
                                                <p className="text-muted">2276 Lynn Ogden Lane Beaumont
                                                    <br/>Lodgeville Road TX 77701</p>
                                            </Media>
                                        </Media>

                                        <Media className="mt-4">
                                            <i className="mdi mdi-phone text-primary h4"></i>
                                            <Media body className="ml-4">
                                                <p className="text-muted">Phone: +71 612-234-4023
                                                    <br/>Fax: +954-627-9727</p>
                                            </Media>
                                        </Media>

                                        <Media className="media mt-4">
                                            <i className="mdi mdi-calendar-clock text-primary h4"></i>
                                            <Media body className="ml-4">
                                                <p className="text-muted">Monday-friday: 9.00-19.00
                                                    <br/>Saturday-Sunday: Holiday</p>
                                            </Media>
                                        </Media>

                                        <Media className="media mt-4">
                                            <i className="mdi mdi-email text-primary h4"></i>
                                            <Media body className="ml-4">
                                                <p className="text-muted">Email: FredVWeaver@rhyta.com</p>
                                            </Media>
                                        </Media>

                                    </div>

                                </div>
                            </Col>

                            <Col lg={7}>
                                <div className="custom-form">
                                    <div id="message"></div>
                                    <AvForm name="contact-form" id="contact-form">
                                        <Row>
                                            <Col lg={12}>
                                                <FormGroup className="mt-3">
                                                <AvField
                                                    name="name"
                                                    id="name"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your name"
                                                    errorMessage="Enter Your Name"
                                                    validate={{ required: { value: true } }}
                                                />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={6}>
                                                <FormGroup className="mt-3">
                                                <AvField
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Your email"
                                                    errorMessage="Enter Your email"
                                                    validate={{
                                                        required: { value: true },
                                                        email: { value: true }
                                                    }}
                                                />
                                                </FormGroup>
                                            </Col>

                                            <Col lg={6}>
                                                <FormGroup className="mt-3">
                                                <AvField
                                                    name="number"
                                                    id="number"
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Phone number"
                                                    errorMessage="Enter Your Phone number"
                                                    validate={{
                                                        required: { value: true },
                                                    }}
                                                />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={12}>
                                                <FormGroup className="mt-3">
                                                    <textarea name="comments" id="comments" rows="5" className="form-control" placeholder="Your message"></textarea>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={12}>
                                                <div className="mt-3">
                                                    <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary" value="Send Message"/>
                                                    <div id="simple-msg"></div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </AvForm>
                                </div>
                            </Col>

                        </Row>

                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default GetInTouch;