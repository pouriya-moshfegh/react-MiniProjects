import React, { Component } from "react";
import BookPart from "./BookPart";

export default class AddForm extends Component {
  constructor() {
    super();
    // -------------------------------------------
    this.submitHandler = this.submitHandler.bind(this);
    // -------------------------------------------

    this.state = {
      title: "",
      author: "",
      name: "",
      addedBooks: [],
    };
  }
  // -------------------------------------------
  submitHandler(e) {
    e.preventDefault();
    // make an array of new book
    let newBook = [
      {
        id: this.state.addedBooks.length + 1,
        title: this.state.title ? this.state.title : "title",
        author: this.state.author ? this.state.author : "author",
        name: this.state.name ? this.state.name : "name",
      },
    ];
    // update the state of book
    this.setState({ addedBooks: [...this.state.addedBooks, ...newBook] });
    // delete the value of books
    this.setState({ title: "", author: "", name: "" });
  }
  // -------------------------------------------

  render() {
    return (
      <>
        {/*========================================*/}
        <form href="#" onSubmit={this.submitHandler}>
          {/*============= title ===============*/}


          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="inputStyle focus:bg-yellow-200 duration-200 bg-yellow-200/70 p-1 clicked:bg-black"
            type="text"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          {/*============== author ==============*/}

          {/* author */}
          <label htmlFor="author">Author</label>
          <input
            id="author"
            className="inputStyle bg-yellow-200/70 p-1  focus:bg-yellow-200 duration-200   "
            type="text"
            value={this.state.author}
            onChange={(e) => this.setState({ author: e.target.value })}
          />
          {/*============  name ===============*/}


          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="inputStyle bg-yellow-200/70 p-1  focus:bg-yellow-200 duration-200  "
            type="text"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          {/*=============  submit ==============*/}

          <input
            type="submit"
            value="submit"
            className="inputStyle mt-10 bg-yellow-400/80 p-1  hover:bg-yellow-400 duration-200 active:translate-y-1 cursor-pointer"
          />
        </form>
        {/*========================================*/}

        <BookPart
          newBook={this.state.addedBooks}
        ></BookPart>
        {/*========================================*/}
      </>
    );
  }
}
