import React from "react";
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // ------------------------------------- //

  //   increasing proggress
  increase() {
    this.setState((pervcount) => {
      return { count: pervcount.count + 1 };
    });
  }

  // ------------------------------------- //

  //   decreasing proggress

  decrease() {
    this.setState((pervcount) => {
      return { count: pervcount.count - 1 };
    });
  }
  // ------------------------------------- //
  render() {
    return (
      // bg
      <div className="p-10 h-screen bg-slate-100">
        {/* container */}
        <div className="container mx-auto bg-violet-100 rounded-lg backdrop-blur-sm p-4">
          {/* header */}
          <h1 className="text-3xl text-center font-semibold first-letter:text-5xl first-letter:text-violet-700">
            counter
          </h1>
          {/* number description */}
          <h3 className="text-center font-2xl  mt-16  font-semibold ">
            The number is :
          </h3>
          <div className="text-center mt-12  ">
            {/* number */}
            <span className="font-semibold text-5xl">{this.state.count}</span>
          </div>
          {/* buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={this.increase.bind(this)}
              className="p-2 bg-violet-400 font-medium rounded-sm shadow-sm hover:bg-violet-300 duration-200 m-4 active:translate-y-1 "
            >
              {" "}
              Increase +
            </button>

            <button
              onClick={this.decrease.bind(this)}
              className="p-2 bg-violet-300 font-medium rounded-sm shadow-sm hover:bg-violet-200 duration-200 m-4 active:translate-y-1 "
            >
              {" "}
              Decrease -
            </button>
          </div>
          <div className="">
            
          </div>
        </div>
      </div>
    );
  }
}
