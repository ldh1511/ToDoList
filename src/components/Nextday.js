import React, { Component } from 'react';
import DoneElement from './DoneElement';
import StarElement from './StarElement';

class Nextday extends Component {
    getDoneElement = () => {
        return (
            this.props.data.map((ele, index) => {
                if (ele.status === "done") {
                    return <DoneElement id={ele.id} time={ele.time} content={ele.content} key={index} />
                }
                return false;
            })
        )
    }
    getStarredElement = () => {
        return (
            this.props.data.map((ele, index) => {
                if (ele.star === "yes") {
                    return <StarElement id={ele.id} time={ele.time} content={ele.content} key={index} />
                }
                return false;
            })
        )
    }
    render() {
        return (
            <div className="container-right">
                <div className="container-bottom-element">
                    <div className="today-title">
                        <h4>Starred</h4>
                    </div>
                    <div className="container-element">
                        <ul>
                            {this.getStarredElement()}
                        </ul>
                    </div>
                </div>
                <div className="container-bottom-element">
                    <div className="today-title">
                        <h4>Done</h4>
                    </div>
                    <div className="container-element">
                        <ul>
                            {this.getDoneElement()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nextday;