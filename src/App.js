import Counter from "./counter/counter";
import NotifCounter from "./notifCounter/NotifCounter";
import Validation from "./ValidationForm/validation";
import Quiz from "./Quiz/quiz";
import Ticket from "./Ticket/Ticket";
import BookList from "./BookList/BookList";
// import MainTest from "./Test1/MainTest";

function App() {
  return (
    <>

      <BookList/>
      <Ticket name="please"></Ticket>
      {/* <div className="devide ">...</div> */}
      <Quiz />
      {/* <div className="devide ">...</div> */}
      <Validation />
      {/* <div className="devide ">...</div> */}
      <Counter />
      {/* <div className="devide">...</div> */}
      <NotifCounter />
      {/* <div className="devide">...</div> */}
    </>
  );
}

export default App;
