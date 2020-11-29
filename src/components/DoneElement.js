import React, { Component } from 'react';

class DoneElement extends Component {
    render() {
        return (
            <li>
                <i className="fas fa-check"></i>
                <span>{this.props.time}</span>
                <h5>{this.props.content}</h5>
            </li>
        );
    }
}

export default DoneElement;