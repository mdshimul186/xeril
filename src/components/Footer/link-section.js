import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LinkSection extends Component {
    render() {
        return (
            <React.Fragment>
                    <h6 className="text-white text-uppercase f-16">{this.props.title}</h6>
                    <ul className="list-unstyled footer-link mt-3 mb-0">
                    {
                            this.props.links.map((fLink, key) =>
                                <li key={key}><Link to={fLink.link}>{fLink.title}</Link></li>
                            )
                    }
                    </ul>
            </React.Fragment>
        );
    }
}

export default LinkSection;