import React from "react";

export default class Validation extends React.Component {
  constructor(probs) {
    super(probs);
    this.state = {
      allValid: false,
      nameValue: "",
      emailValue: "",
      passValue: "",
      submitted:false
    };
    this.ValidationFunc = this.ValidationFunc.bind(this);
  }
  ValidationFunc(e) {
    this.setState({submitted:true});
    e.preventDefault();
  }
  render() {
    return (
      // page background
      <div className="h-full bg-indigo-900 grid place-items-center p-10">
        {/* container */}
        <div className="container  md:flex md:space-x-4 justify-between  bg-black/70 shadow-xl text-white p-10">
          {/* left-form */}
          <div className="left-form md:w-1/2 ">
            <div className="flex flex-col items-center md:block  space-y-4">
              <div className="text-center md:text-left">
                {/* header Title */}
                <h1 className="font-semibold text-3xl">Welcome to KVP</h1>
                <span className="text-sm ml-2 text-white/80">
                  creat your account
                </span>
              </div>
              {/* form holder */}

              <form
                href="#"
                className="w-full  flex flex-col space-y-4 h-[100%]  justify-evenly "
                onSubmit={this.ValidationFunc}
              >
                {/* name */}
                <div className=""><label
                  htmlFor="name"
                  className="ml-1 text-white/50 text-sm block pt-2  "
                >
                  Name
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    this.setState({ nameValue: e.target.value });
                  }}
                  value={this.state.nameValue}
                  id="name"
                  className="inputStyle "
                />
             {!this.state.nameValue && this.state.submitted &&  <span className="text-[12px] text-red-500 h-2">Enter Your Name</span>}<span className="text-transparent">d</span>
                
                </div>
                {/* email */}
                <div className=""><label
                  htmlFor="email"
                  className="ml-1 text-white/50 text-sm block"
                >
                  Email
                </label>
                <input
                  type="email"
                  //   placeholder="..."
                  value={this.state.emailValue}
                  onChange={(e) => {
                    this.setState({ emailValue: e.target.value });
                  }}
                  id="email"
                  className="inputStyle "
                />
              {!this.state.emailValue && this.state.submitted &&  <span className="text-[12px] text-red-500 h-2">Enter Your Email</span>}<span className="text-transparent">d</span>
                
                </div>
                {/* pass */}
               <div className=""> <label
                  htmlFor="password"
                  className="ml-1 text-white/50 text-sm "
                >
                  Password
                </label>
                <input
                  type="password"
                  value={this.state.passValue}
                  onChange={(e) => {
                    this.setState({ passValue: e.target.value });
                  }}
                  id="password"
                  className="inputStyle"
                />
                 {!this.state.passValue && this.state.submitted &&  <span className="text-[12px] text-red-500 h-2">Enter Your Password</span>}<span className="text-transparent">d</span>
                
                </div>
                <input
                  type="submit"
                onClick={()=>{
                    this.state.nameValue && this.state.emailValue &&this.state.passValue && this.setState({allValid:true})
                }}
                  className="cursor-pointer bg-slate-200 p-2 text-black/80 font-semibold rounded-lg hover:bg-slate-300 duration-200"
                />
              </form>
            </div>
          </div>
          {/* right photo */}
          <div className="hidden md:block h-full w-1/2 bg-white "> bg</div>
        </div>
      </div>
    );
  }
}
