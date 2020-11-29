import React, { Component } from 'react';

class StarElement extends Component {
    render() {
        return (
            <li>
                <i className="fas fa-star"></i>
                <span>{this.props.time}</span>
                <h5>{this.props.content}</h5>
            </li>
        );
    }
}

export default StarElement;