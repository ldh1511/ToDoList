import React, { Component } from 'react';
import Add from './Add';
import TaskElement from './TaskElement';

class Today extends Component {
    showTask=()=>{
        let myArr=this.props.data.map((ele,index)=>{
            return ele.content.charAt(0);
        })
        return(
            this.props.data.map((ele,index)=>{
                if(ele.status==="none"){
                    return <TaskElement id={ele.id} time={ele.time} content={ele.content} key={index} title={myArr[index]} type={ele.type} getFinishTask={this.props.getFinishTask} getStarredTask={this.props.getStarredTask} getDeleteTask={this.props.getDeleteTask} getInfo={this.props.getInfo}/>
                }
                return false;
            })
        )
    }
    getDate=()=>{
        let today=new Date();
        let date=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        return date;
    }
    render() {
        return (
            <div className="today-container">
                <div className="today-left">
                    <div className="today-title">
                        <div className="title-left">
                            <h4>Today</h4>
                            <p>{this.getDate()}</p>
                        </div>
                        <Add changeBtn={this.props.t} getNewTask={this.props.getNewTask}/>
                    </div>
                    <div className="today-box">
                        {this.showTask()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Today;