import React from "react";

export default class NotifCounter extends React.Component {
  constructor(probs) {
    super(probs);
    this.state = {
      notif: ["one", "one", "one", "one", "one"],
      userName: "",
      isChecked:false,
      
    };
    this.checkboxClick=this.checkboxClick.bind(this)
  }
  checkboxClick(e){
    console.log(e)
    this.setState({
      isChecked:e.nativeEvent.checked
    }
      )
  }
  render() {
    return (
      <div className="h-screen bg-lime-100/30">
        <div className="h-16 w-screen bg-emerald-700 flex justify-start items-center px-2 space-x-6">
          <h1 className="font-semibold text-3xl text-slate-100">Website</h1>
          <div className="relative group mt-2 h-full  flex items-center w-20">
            <a
              href="#h"
              className="font-semibold text-green-100  rounded-xl group group-hover:scale-105 p-2 duration-200 z-0 "
            >
              News
            </a>
            {this.state.notif.length > 0 && (
              <div className="bg-green-200/50 grid place-items-center text-[13px] text-green-100 font-semibold w-6  h-6 rounded-full absolute  top-3 right-2 z-20 group-hover:bg-green-200/60 duration-200">
                {this.state.notif.length}
              </div>
            )}
          </div>
        </div>
       
      </div>
    );
  }
}
