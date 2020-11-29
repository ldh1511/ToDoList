import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import NavigateURL from './router/NavigateURL';
import { HashRouter} from "react-router-dom";
import AddForm from './components/AddForm';
import Data from './components/Data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusBtn: false,
      data: Data,
      menu:false
    }
  }
  componentWillMount() {
    if(localStorage.getItem('Data')===null){
      localStorage.setItem('Data',Data)
    }
    else{
      let temp=JSON.parse(localStorage.getItem('Data'))
      this.setState({data:temp
      });
    }
  }
  changeMenu=()=>{
    this.setState({
      menu:!this.state.menu
    });
  }

  showMenu=()=>{
    if(this.state.menu===true){
      return <Menu menu={this.state.menu} />
    }
  }
  changeBtn = () => {
    this.setState({
      statusBtn: !this.state.statusBtn
    });
  }
  getNewTask = (content, type) => {
    let info = {}
    let today = new Date();
    info.id = "";
    info.content = content;
    info.type=type;
    info.time = today.getHours() + ":" + today.getMinutes();
    info.status = "none";
    let newData = this.state.data;
    newData.push(info);
    this.setState({
      data: newData
    });
    localStorage.setItem('Data',JSON.stringify(newData))
  }
  getFinishTask = (e) => {
    let newArr = this.state.data;
    newArr.forEach(ele => {
      if (ele.id === e) {
        ele.status = "done"
      }
    })
    this.setState({
      data: newArr
    });
    localStorage.setItem('Data',JSON.stringify(newArr))
  }
  getStarredTask = (e) => {
    let newArr = this.state.data;
    newArr.forEach(ele => {
      if (ele.id === e) {
        ele.star = "yes"
      }
    })
    this.setState({
      data: newArr
    });
    localStorage.setItem('Data',JSON.stringify(newArr))
  }
  getDeleteTask = (e) => {
    let newArr = this.state.data;
    let Arr = newArr.filter(ele => {
      return ele.id !== e
    })
    this.setState({
      data: Arr
    });
    localStorage.setItem('Data',JSON.stringify(Arr))
  }
  getInfo = (id, name, type) => {
    let newArr = this.state.data;
    newArr.forEach(ele => {
      if (ele.id === id) {
        ele.content = name;
        ele.type=type;
      }
    })
    this.setState({
      data: newArr
    });
    localStorage.setItem('Data',JSON.stringify(newArr))
  }
  showForm = () => {
    if (this.state.statusBtn === true) {
      return <AddForm changeBtn={this.changeBtn} getNewTask={this.getNewTask} />
    }
  }
  render() {
    return (
      <HashRouter>
        <Header  change={this.changeMenu}/>
        <section className="content">
          <Menu />
          <NavigateURL changeBtn={this.changeBtn} data={this.state.data} getNewTask={this.getNewTask} getFinishTask={this.getFinishTask} getStarredTask={this.getStarredTask} getDeleteTask={this.getDeleteTask} getInfo={this.getInfo} />
          {this.showForm()}
          {this.showMenu()}
        </section>
        
      </HashRouter>
    );
  }
}


export default App;
