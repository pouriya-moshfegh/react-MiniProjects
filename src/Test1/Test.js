import React, { Component } from "react";
import "./Test.css"
// import { AiFillBook } from "react-icons/ai";

export default class Test extends Component {
    
    
    removerItem(id){
        this.props.onRemove(id);
    }
    render() {
    return (
      <div>
        {/* <AiFillBook/> */}
        <h1 style={{color:"black"}}>{this.props.name} </h1>
        <button className="bg-black/30 rounded-sm shadow-md p-1 m-2" onClick={this.removerItem.bind(this,this.props.id)}>Remove</button>
      </div>
    );
  }
}
