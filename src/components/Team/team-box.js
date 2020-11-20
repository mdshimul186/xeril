import React, { Component } from 'react';
import { Col } from "reactstrap";

class TeamBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.members.map((member, key) =>
                        <Col key={key} lg={3}>
                            <div className="team-box text-center mt-4">
                                <div className="team-img">
                                    <img src={member.img} className="rounded-circle" alt=""/>
                                </div>

                                <div className="team-content bg-white mt-5 p-4 rounded">
                                    <h5 className="f-18 text-primary">{member.name}</h5>
                                    <p>{member.post}</p>
                                    <p className="text-muted mb-0">{member.desc}</p>
                                </div>
                            </div>
                        </Col>
                    )
                } 
            </React.Fragment>
        );
    }
}

export default TeamBox;