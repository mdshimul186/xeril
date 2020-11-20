import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class FooterLinks extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="footer-alt pt-3 pb-3">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center">
                                <p className="text-white-50 mb-0">© 2020 Xeril. Design by Themesdesign</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </React.Fragment>
        );
    }
}

export default FooterLinks;