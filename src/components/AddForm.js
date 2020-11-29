import React, { Component } from 'react';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            type:0,
            infoTask: {}
        };
    }
    getContent = (e) => {
        let name=e.target.name;
        let value = e.target.value;
        this.setState({
           [name]:value
        });
    }
    getNewTask=()=>{
        if(this.state.content===""){
            alert('Please enter your task!')
        }
        else{
            this.props.changeBtn()
            this.props.getNewTask(this.state.content, this.state.type)
        }
        
    }
    render() {
        return (
            <div className="add-form">
                <form className="add-form-box">
                    <h1>Add new Task!</h1>
                    <div className="form-detail">
                        <label>Enter the task</label>
                        <input type="text" placeholder="example: Study,..." name="content" onChange={(e) => { this.getContent(e) }} />
                    </div>
                    <div className="form-detail">
                        <label>Select type of task</label>
                        <select name="type" onChange={(e) => { this.getContent(e) }}>
                            <option value={1}>Home</option>
                            <option value={2}>Work</option>
                            <option value={3}>Study</option>
                            <option value={4}>Other</option>
                        </select>
                    </div>
                    <div className="btn-add-form" onClick={() => { this.getNewTask() }}>
                        <h3>Add</h3>
                    </div>
                </form>
            </div>

        );
    }
}

export default AddForm;