import React, { Component } from 'react';
import { Col, Media } from "reactstrap";

import CountUp from 'react-countup';

class CounterBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.counters.map((counter, key) =>
                        <Col lg={6} key={key}>
                            <div className="counter-box mt-4">
                                <Media>
                                    <div className="counter-icon">
                                        <i className={counter.icon}></i>
                                    </div>
                                    <Media body className="ml-3">
                                        <h4 className="counter-value">
                                            <CountUp duration={8} end={counter.end} />
                                        </h4>
                                        <p className="text-muted">{counter.title}</p>
                                    </Media>
                                </Media>
                            </div>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default CounterBox;