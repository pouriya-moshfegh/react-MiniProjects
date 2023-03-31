import React, { Component } from "react";

export default class Quiz extends Component {
  constructor() {
    super();
    // ==========================

    this.selectOption = this.selectOption.bind(this);
    this.playAgain = this.playAgain.bind(this);
    this.assistBtn = this.assistBtn.bind(this);

    // ==========================

    this.state = {
      trueAnswers: 0,
      quizId: 0,
      data: [
        {
          id: 1,
          question: "what is the capital of iran?",
          answers: [
            { option: "Tehran", valid: true },
            { option: "qazvin", valid: false },
            { option: "Rasht", valid: false },
            { option: "Qom", valid: false },
          ],
        },
        {
          id: 2,
          question: "what is the biggest country in world?",
          answers: [
            { option: "Germany", valid: false },
            { option: "Russia", valid: true },
            { option: "Austria", valid: false },
            { option: "China", valid: false },
          ],
        },
        {
          id: 3,
          question: "what is the longest river in the world?",
          answers: [
            { option: "Mississippi River", valid: false },
            { option: "The Amazon River", valid: false },
            { option: "Yangtze River", valid: false },
            { option: "Nile River", valid: true },
          ],
        },
        {
          id: 4,
          question: "what is the biggest dessert in the world?",
          answers: [
            { option: "Sahara Desert", valid: true },
            { option: "Arabian Desert", valid: false },
            { option: "Gobi Desert", valid: false },
            { option: "Nam desert", valid: false },
          ],
        },
      ],
    };
  }
  // ==========================

  selectOption(e) {
    // this will raise the question
    this.setState((pervcount) => {
      return { quizId: pervcount.quizId + 1 };
    });
    // raise true answers
    e.target.dataset.set === "true" &&
      this.setState((pervcount) => {
        return { trueAnswers: pervcount.trueAnswers + 1 };
      });
    console.log(this.state.trueAnswers);
    // finall question
    if (this.state.quizId === this.state.data.length - 1) {
      this.setState({ quizId: "finished" });
    }
  }
  // ==========================

  playAgain() {
    this.setState({ quizId: 0 });
    this.setState({ trueAnswers: 0 });
  }
  // ==========================
  assistBtn(e) {
    // skip btn
    e.target.innerText === "Skip" &&
      this.setState((pervcount) => {
        return { quizId: pervcount.quizId + 1 };
      });

    // Delete one option
    e.target.innerText === "Delete one option" && alert("delete");

    // others answers
    e.target.innerText === "Others answers" && alert("other");
  }

  // ==========================

  render() {
    return (
      // background
      <div className="h-screen bg-purple-400/80 grid place-items-center p-16">
        {/* container */}
        <div className="container bg-pink-900/70 shadow-xl rounded-r-3xl min-h-[50vh] flex">
          {/* --------------------------- */}
          {/* !left part */}
          <div className=" w-2/5 px-3 bg-zinc-900 py-4 flex flex-col justify-between">
            <h2 className="text-2xl text-white font-semibold lg:text-3xl x:text-4xl">Quiz App</h2>
            <div className="  flex flex-col justify-between  space-y-3">
              {/* help part */}
              <span className="text-sm block text-slate-100/80 font-semibold">
                Need help?
              </span>
              <button  onClick={this.assistBtn} className="quizHelp">
                Skip
              </button>
              <button href="h#" onClick={this.assistBtn} className="quizHelp">
                Delete one option
              </button>
              <button href="h#" onClick={this.assistBtn} className="quizHelp">
                Others answers
              </button>
            </div>
          </div>

          {/* --------------------------- */}

          {/* options part */}
          <div className="w-4/5 rounded-r-3xl pt-4 pb-6 px-3">
            <div className=" flex flex-col h-full space-y-5">
              {/* the question */}
              <p className=" text-center text-white text-lg font-semibold">
                {this.state.quizId < this.state.data.length &&
                  this.state.data[this.state.quizId].question}
              </p>

              {/* --------------------------- */}

              {/*options */}
              {this.state.quizId < this.state.data.length &&
                this.state.data[this.state.quizId].answers.map((answer,index) => {
                  return (
                    <div
                      className="quizAnswer"
                      key={index}
                      data-set={answer.valid}
                      onClick={this.selectOption}
                    >
                      {answer.option}
                    </div>
                  );
                })}

              {/* --------------------------- */}

              {/*Result */}
              {this.state.quizId === "finished" && (
                <div className=" flex flex-col justify-between  h-full space-y-6">
                  <p className="text-white font-semibold text-3xl text-center">
                    You have {this.state.trueAnswers} true answers
                  </p>
                  <a
                    href="#h"
                    onClick={this.playAgain}
                    className="text-center m-auto text-red-100  text-bold bg-red-100/10 px-10 py-2 rounded-3xl hover:bg-red-100/20"
                  >
                    wanna play another round?
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
