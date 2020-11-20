import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

class PricingBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.pricings.map((pricing, key) =>
                        <Col lg={4} key={key}>
                            <div className="pricing-box bg-white box-shadow text-center p-5 mt-4 rounded">
                                {
                                    pricing.isNew === true &&
                                    <div className="pricing-label">
                                        <h5 className="text-white f-16">New</h5>
                                    </div>
                                }
                                <h5 className="text-uppercase">{pricing.title}</h5>
                                <h1 className="mt-4 pt-2"><sup className="h3">$</sup> {pricing.price} <span className="text-primary f-16">/{pricing.duration}</span></h1>
                                <div className="pricing-features mt-4 pt-3">
                                    {
                                        pricing.features.map((feature, key) =>
                                            <p key={key}>{feature.title}</p>
                                        )
                                    }
                                </div>
                                <div className="mt-5">
                                    <Link to="#" className="btn btn-primary w-100">Purchase Now</Link>
                                </div>
                            </div>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default PricingBox;