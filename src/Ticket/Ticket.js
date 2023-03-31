import React, { Component } from "react";

export default class Ticket extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      clicked: [{ cities: [] }],
      countries: [
        {
          country: "Iran",
          cities: ["tehran", "yazd", "kish", "qeshm"],
        },
        {
          country: "France",
          cities: ["paris", "leon", "marcy", "monaco"],
        },
        {
          country: "Italy",
          cities: ["napoli", "rome", "juventus", "sea"],
        },
        {
          country: "Germany",
          cities: ["berlin", "frankfurt", "munich", "leipzig"],
        },
        {
          country: "Africa",
          cities: ["egypt", "morocco", "nigeria", "fiji"],
        },
      ],
    };
  }
  clickHandler(e) {
    let clickedOne = this.state.countries.find(
      (item) => item.country === e.target.value
    );
    this.setState({ clicked: clickedOne });
    if(this.state.clicked){
    }
  }

  render() {

    return (
      <div>
        {/* background */}
        <div className="h-screen w-screen bg-gradient-to-r from-teal-300 to-sky-600 flex justify-center py-20 ">
          {/* container */}
          <div className="container h-fit bg-white/30 p-12 shadow-2xl ">
            {/* title */}
            <h1 className="text-center text-3xl lg:text-4xl text-stone-900/90 font-bold p-4">
              Choose your ticket {this.props.name}
            </h1>
            {/* form */}
            <form action="#" className="mt-10">
              <label
                htmlFor="country"
                className=" text-xl md:text-2xl text-green-900 p-2 font-semibold"
              >
                Choose a country
              </label>
              <select
                onChange={this.clickHandler}
                name="country"
                id="country"
                className="outline-none p-1 ml-2 rounded-sm bg-black/10"
              >
                {this.state.countries.map((option, index) => {
                  return (
                    <option value={option.country} key={index}>
                      {option.country}
                    </option>
                  );
                })}
              </select>
              <select
                name="cities"
                id="cities"
                className="outline-none w-30 p-1 ml-2 rounded-sm bg-black/10"
              >
                {!this.state.clicked.cities && (
                  <option value="select">
                    select city
                  </option>
                )}
                {this.state.clicked.cities &&
                  this.state.clicked.cities.map((option, index) => {
                    return (
                      <option key={index}  value={option}>
                        {option}
                      </option>
                    );
                  })}

              </select>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
