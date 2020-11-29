import React, { Component } from 'react';
import DoneBox from './DoneBox';
import TaskElement from './TaskElement';
class Star extends Component {
    showTask=()=>{
        let myArr=this.props.data.map((ele,index)=>{
            return ele.content.charAt(0);
        })
        return(
            this.props.data.map((ele,index)=>{
                if(ele.star==="yes"){
                    return <DoneBox time={ele.time} content={ele.content} key={index} title={myArr[index]} id={ele.id} getDeleteTask={this.props.getDeleteTask}/>
                }
                return false;
            })
        )
    }
    render() {
        return (
            <div className="today-container">
                <div className="today-left">
                    <div className="today-title">
                        <div className="title-left">
                            <h4>Starred</h4>
                        </div>
                    </div>
                    <div className="done-box">
                        {this.showTask()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Star;