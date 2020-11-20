import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Media, Form, Button } from "reactstrap";

//Import Footer link
import FooterLinks from "./footer-links";
import LinkSection from "./link-section";

class Footer extends Component {
    state = {
        links1 : [
            { link : "#", title : "Monitoring Grader" },
            { link : "#", title : "Video Tutorial" },
            { link : "#", title : "Term & Service" },
            { link : "#", title : "Tulsy API" },
        ],
        links2 : [
            { link : "#", title : "Sign Up" },
            { link : "#", title : "Login" },
            { link : "#", title : "Terms of Services" },
            { link : "#", title : "Privacy Policy" },
        ],
        socials : [
            { icon : "mdi mdi-facebook", link : "#" },
            { icon : "mdi mdi-linkedin", link : "#" },
            { icon : "mdi mdi-pinterest", link : "#" },
            { icon : "mdi mdi-twitter", link : "#" },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <footer className="bg-footer">
                    <Container>
                        <div className="footer-subscribe py-5">
                            <Row>
                                <Col lg={8}>
                                    <div className="mt-3">
                                        <h5 className="text-white mt-2 pt-1">Be in the know with the letest and greatest from <span className="text-primary text-uppercase">Xeril</span></h5>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="footer-subcribe text-right">
                                        <Form action="#">
                                            <input placeholder="Your Email Address" type="text"/>
                                            <Button type="submit" color="primary"><i className="mdi mdi-bell-ring"></i></Button>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <Row className="py-5">
                            <Col lg={3}>
                                <div className="mt-2">
                                    <h6 className="text-white text-uppercase f-16">Xeril</h6>
                                    <p className="text-white-50 mt-3 pt-2 mb-0 ">Semper nibh a dignissim Integer cursus tempsed quis justo molis starm the consectetur.</p>
                                    <div className="mt-4">
                                        <ul className="list-inline footer-social mb-0">
                                            {
                                                this.state.socials.map((social, key) =>
                                                    <li className="list-inline-item" key={key} >
                                                        <Link to={social.link} className="rounded">
                                                            <i className={social.icon}></i>
                                                        </Link>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3}>
                                <div className="mt-2 pl-0 pl-lg-5">
                                    <LinkSection title="Resaurses" links={this.state.links1} />
                                </div>
                            </Col>

                            <Col lg={2}>
                                <div className="mt-2">
                                    <LinkSection title="Help" links={this.state.links1} />
                                </div>
                            </Col>

                            <Col lg={4}>
                                <div className="mt-2">
                                    <h6 className="text-white text-uppercase f-16">Latest news</h6>
                                    <div className="mt-3 mb-0">
                                        <div className="">
                                            <Media>
                                                <i className="mdi mdi-twitter text-white-50 float-left"></i>
                                                <Media body>
                                                    <p className="text-white-50 pl-3">Pleasures have to repudiated annoyances accepted therefore always holds chooses enjoy a pleasure consequences.</p>
                                                </Media>
                                            </Media>
                                        </div>
                                        <div className="mt-2">
                                            <Media>
                                                <i className="mdi mdi-twitter text-white-50 float-left"></i>
                                                <Media body>
                                                    <p className="text-white-50 pl-3">Greater pleasures el esndures pains avoid welcomed avoided pariatu</p>
                                                </Media>
                                            </Media>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>
                {/* Render footer links */}
                <FooterLinks/>
            </React.Fragment>
        );
    }
}

export default Footer;