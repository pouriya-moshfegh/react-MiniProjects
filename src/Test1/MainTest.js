import React, { Component } from "react";
import Test from "./Test";

export default class MainTest extends Component {
  constructor() {
      super();
      this.remover=this.remover.bind(this);
    this.state = {
      user: [
        { id: 1, name: "ali" },
        { id: 2, name: "reza" },
        { id: 3, name: "hamed" },
        { id: 4, name: "omid" },
      ],
    };
  }
  remover(userId){
let newUsers =[...this.state.user]
let whichUser=newUsers.findIndex((each)=>each.id===userId);
newUsers.splice(whichUser,1)
this.setState({user:[...newUsers]})
  }
  render() {
    return (
      <div>
        {this.state.user.map((items) => 
        {
        return <Test key={items.id} {...items} onRemove={this.remover}></Test>;
        })}
      </div>
    );
  }
}
