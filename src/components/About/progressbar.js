import React, { Component } from 'react';
import { Progress } from "reactstrap";

class ProgressBar extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.skills.map((skill, key) =>
                                    <div key={key} className="mt-4">
                                        <p className="font-weight-bold mb-2">{skill.title}</p>
                                        <Progress value={skill.value}>
                                                <p className="progress-value f-15 font-weight-bold">{skill.value}%</p>
                                        </Progress>
                                    </div>
                    )
                }            
            </React.Fragment>
        );
    }
}

export default ProgressBar;