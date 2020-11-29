import React, { Component } from 'react';
import All from '../components/All';
import {Switch,Route} from "react-router-dom";
import Today from '../components/Today';
import Done from '../components/Done';
import Star from '../components/Star';
import Home from '../components/Home';
import Work from '../components/Work';
import Study from '../components/Study';
import Other from '../components/Other';

class NavigateURL extends Component {
    render() {
        return (
            <div className="right-menu">
                <Switch>
                    <Route exact path="/" component={() => <All t={this.props.changeBtn} data={this.props.data} getNewTask={this.props.getNewTask} getFinishTask={this.props.getFinishTask} getStarredTask={this.props.getStarredTask} getDeleteTask={this.props.getDeleteTask} getInfo={this.props.getInfo}/>} ></Route>
                    <Route exact path="/today" component={() => <Today t={this.props.changeBtn} data={this.props.data} getNewTask={this.props.getNewTask} getFinishTask={this.props.getFinishTask} getStarredTask={this.props.getStarredTask} getDeleteTask={this.props.getDeleteTask} getInfo={this.props.getInfo}/>} ></Route>
                    <Route exact path="/done" component={() => <Done data={this.props.data} getDeleteTask={this.props.getDeleteTask}/>} ></Route>
                    <Route exact path="/starred" component={() => <Star data={this.props.data} getDeleteTask={this.props.getDeleteTask}/>} ></Route>
                    <Route exact path="/home" component={() => <Home data={this.props.data} getDeleteTask={this.props.getDeleteTask}/>} ></Route>
                    <Route exact path="/work" component={() => <Work data={this.props.data} getDeleteTask={this.props.getDeleteTask}/>} ></Route>
                    <Route exact path="/study" component={() => <Study data={this.props.data} getDeleteTask={this.props.getDeleteTask}/>} ></Route>
                    <Route exact path="/other" component={() => <Other data={this.props.data} getDeleteTask={this.props.getDeleteTask}/>} ></Route>
                </Switch>
            </div>
        );
    }
}

export default NavigateURL;