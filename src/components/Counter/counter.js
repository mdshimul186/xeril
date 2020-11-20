import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Blog Box
import CounterBox from "./counter-box";

//Import Images
import img2 from "../../assets/images/features/img-2.jpg";

class Counter extends Component {
    state = {
        counters1 : [
            { icon : "mdi mdi-heart", title : "Happy Clients", end : 485 },
            { icon : "mdi mdi-layers", title : "Projects Compleated", end : 536 }
        ],
        counters2 : [
            { icon : "mdi mdi-cloud-download", title : "Files Downloaded", end : 1662 },
            { icon : "mdi mdi-code-not-equal-variant", title : "Liens Of Code", end : 14652 }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>
                        <Row className="vertical-content">
                            <Col lg={6}>
                                <div className="counter-box">
                                    <Col lg={12}>
                                        <h4>Our Achivements</h4>
                                        <p className="text-muted mt-2">Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo Pellentesque hendrerit pellentesque libero nec sollicitudin.</p>

                                        <div className="mt-4">
                                            <Row id="counter">
                                                <CounterBox counters={this.state.counters1} />
                                            </Row>

                                            <Row>
                                                <CounterBox counters={this.state.counters2} />
                                            </Row>
                                        </div>

                                    </Col>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="img">
                                    <img src={img2} className="img-fluid box-shadow-lg rounded" alt=""/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Counter;