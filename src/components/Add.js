import React, { Component } from 'react';

class Add extends Component {
    render()
    {
        return (
            <div className="btn-add" onClick={()=>{this.props.changeBtn()}}>
                <h3>Add</h3>
            </div>
        );
    }
}

export default Add;