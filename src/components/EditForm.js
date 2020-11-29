import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.id,
            content:this.props.content,
            type:this.props.type
        }
    }
    isChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        this.setState({
            [name]:value
        });
    }
    getInfo=()=>{
        this.props.getInfo(this.props.id, this.state.content, this.state.type)
        this.props.changestatus()
    }
    render() {
        return (
            <div className="add-form">
                <form className="add-form-box edit-form">
                    <h1>Edit this Task</h1>
                    <div className="form-detail">
                        <label>Name of task</label>
                        <input type="text" placeholder="example: Study,..." name="content" defaultValue={this.props.content} onChange={(e)=>{this.isChange(e)}}/>
                    </div>
                    <div className="form-detail">
                        <label>Select type of task</label>
                        <select defaultValue={this.props.type} name="type" onChange={(e)=>{this.isChange(e)}}>
                            <option value={1}>Home</option>
                            <option value={2}>Work</option>
                            <option value={3}>Study</option>
                            <option value={4}>Other</option>
                        </select>
                    </div>
                    <div className="btn-add-form" onClick={()=>{this.getInfo()}}>
                        <h3>Save</h3>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditForm;