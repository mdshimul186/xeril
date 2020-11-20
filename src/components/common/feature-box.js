import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeatureBox extends Component {
    render() {
        return (
           <React.Fragment>
                    <div className="features-box">
                        <div className="number">
                            {this.props.number}
                        </div>
                        <h3>{this.props.title}</h3>

                        <p>{this.props.desc1}</p>

                        <p>{this.props.desc2}</p>

                        <Link to={this.props.link} className="btn btn-link margin-t-30">Learn more <i className="ti-angle-double-right"></i></Link>
                    </div>
           </React.Fragment>
        );
    }
}

export default FeatureBox;