import React from "react";

export default class BookPart extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-col mt-5 bg-yellow-100/50">
          <table>
            {/* ======== titles ========== */}
            <thead>
              <tr className="bg-orange-300 mb-2 inputStyle">
                <th className="font-semibold">Title</th>
                <th className="font-semibold">Author </th>
                <th className="font-semibold">Name</th>
              </tr>
            </thead>
            {/* ========== new books =========== */}
            {this.props.newBook.map((item) => {
              return (
                <tbody key={item.id}>
                  <tr className="bg-orange-300 mt-2 inputStyle">
                    <th className="font-normal">{item.title}</th>
                    <th className="font-normal">{item.author}</th>
                    <th className="font-normal">{item.name}</th>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </>
    );
  }
}
