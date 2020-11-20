import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

class SectionTitle extends Component {
    render() {
        return (
            <React.Fragment>
            <Row>
                <Col lg="12">
                    <div className="header-title text-center">
                        {
                            this.props.subtitle &&
                            <p className="text-uppercase text-muted mb-2">{this.props.subtitle}</p>
                        }
                        <h2 className={this.props.isLight === true ? "text-uppercase text-white" : "text-uppercase"}>{this.props.title}</h2>
                        <div className="title-border mt-3"></div>
                        <p className={this.props.isLight === true ? "title-desc text-white-50 mt-3" : "title-desc text-muted mt-3"}>{this.props.desc}</p>
                    </div>
                </Col>
            </Row>
            </React.Fragment>
        );
    }
}

export default SectionTitle;