import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ProcessBox from "./process-box";

class Process extends Component {
    constructor(props) {
        super(props);
        this.state = {
            processes : [
                { id : "01", title : "Concept", desc : "Interdum malesuada fames ipsum primi faucibus." },
                { id : "02", title : "Plan", desc : "Interdum malesuada fames ipsum primi faucibus." },
                { id : "03", title : "Design", desc : "Interdum malesuada fames ipsum primi faucibus." },
                { id : "04", title : "Development", desc : "Interdum malesuada fames ipsum primi faucibus." },
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="bg-progress section">
                    <div className="bg-overlay"></div>
                    <Container>
                    <SectionTitle
                        title="Our Process"
                        desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
                        isLight={true}
                    />

                        <Row className="mt-5 pt-2">
                            <ProcessBox processes={this.state.processes} />
                        </Row>

                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Process;