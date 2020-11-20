import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Components
import ProgressBar from "./progressbar";

//Import Imaghes
import features1 from "../../assets/images/features/img-1.jpg";

class BestSkills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills : [
                { title : "Web Design", value : 80 },
                { title : "Development", value : 60 },
                { title : "Branding", value : 40 },
                { title : "Code", value : 75 },
            ]
        }
    }

    componentDidMount(){
        var ele = document.getElementsByClassName("progress-bar");
        for( var i=0; i< ele.length ; i++){
            ele[i].classList.add("rounded");
        }
    }
    
    render() {
        return (
            <React.Fragment>
            <section className="section bg-light">
                <Container>
                    <Row className="vertical-content">

                        <Col lg="6" className="p-0">
                            <div className="skill-box bg-white p-4 rounded box-shadow">
                                <h5>Best Skills.</h5>
                                <p className="text-muted">Quisque semper nulla euismod tempor sodales eleifend libero velit Proin pulvinar non rutrum elementum.</p>
                                <div className="skills">
                                    <ProgressBar skills={this.state.skills} />
                                </div>

                            </div>

                        </Col>
                        <Col lg="6" className="p-0 about-img">
                            <img src={features1} className="img-fluid rounded box-shadow" alt=""/>
                        </Col>

                    </Row>
                </Container>
            </section>
            </React.Fragment>
        );
    }
}

export default BestSkills;