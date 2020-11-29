import React, { Component } from 'react';
import EditForm from './EditForm';

class TaskElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            editform: false
        }
    }

    getFinishTask = () => {
        this.props.getFinishTask(this.props.id);
    }
    getStarredTask = () => {
        this.props.getStarredTask(this.props.id);
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
    changestatus = () => {
        this.setState({
            status: true
        });
    }
    changestatusEdit=()=>{
        this.setState({
            editform:!this.state.editform
        });
    }
    showEditForm=()=>{
        if(this.state.editform===true){
            return <EditForm changestatus={this.changestatusEdit} getInfo={this.props.getInfo}
            id={this.props.id} content={this.props.content} time={this.props.time} type={this.props.type}/>
        }
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
            <div className="today-element">
                <div className="element-top">
                    <div className="icon">{this.props.title}</div>
                    <div className="icon-right">
                        <button className="btn-done" onClick={() => { this.getFinishTask() }}><i className="fas fa-check"></i></button>
                        <button className="btn-done" onClick={() => { this.getStarredTask() }}><i className="fas fa-star"></i></button>
                    </div>

                </div>
                <div className="element-bottom">
                    <div className="ele-left">
                        <div className="element-time">{this.props.time}</div>
                        <div className="element-content">{this.props.content}</div>
                    </div>
                    <div className="ele-right">
                        <button className="btn-edit" onClick={()=>{this.changestatusEdit()}}><i className="far fa-edit"></i></button>
                        <button className="btn-edit" onClick={() => this.changestatus()}><i className="far fa-trash-alt"></i></button>
                    </div>
                </div>
                {this.showDeleteForm()}
                {this.showEditForm()}
            </div>
            
        );
    }
}

export default TaskElement;