import React, { Component } from 'react';
import Nextday from './Nextday';
import Today from './Today';

class All extends Component {
    render() {
        return (
            <div className="content-right">
                <div className="all">
                    <Today t={this.props.t} data={this.props.data} getNewTask={this.props.getNewTask} getFinishTask={this.props.getFinishTask} getStarredTask={this.props.getStarredTask}getDeleteTask={this.props.getDeleteTask} getInfo={this.props.getInfo}/>
                    <Nextday data={this.props.data} />
                </div>
            </div>
        );
    }
}

export default All;