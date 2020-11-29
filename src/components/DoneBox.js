import React, { Component } from 'react';

class DoneBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            editform: false
        }
    }
    changestatus = () => {
        this.setState({
            status: true
        });
    }
    changestatusTrue = () => {
        this.setState({
            status: false
        });
        this.props.getDeleteTask(this.props.id)
    }
    changestatusFalse = () => {
        this.setState({
            status: false
        });
    }
    showDeleteForm = () => {
        if (this.state.status === true) {
            return (
                <div className="add-form">
                    <div className="form-delete">
                        <label>Are you sure delete this task?</label>
                        <div className="btn-delete">
                            <button onClick={()=>{this.changestatusTrue()}}><i className="fas fa-check"/></button>
                            <button onClick={()=>{this.changestatusFalse()}}><i className="fas fa-times"/></button>
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="done-element">
                <div className="element-top">
                    <div className="icon">{this.props.title}</div>
                </div>
                <div className="element-bottom">
                    <div className="ele-left">
                        <div className="element-time">{this.props.time}</div>
                        <div className="element-content">{this.props.content}</div>
                    </div>
                    <div className="ele-right">
                        <button className="btn-edit"  onClick={() => this.changestatus()}><i className="far fa-trash-alt"></i></button>
                    </div>
                </div>
                {this.showDeleteForm()}
            </div>
        );
    }
}

export default DoneBox;