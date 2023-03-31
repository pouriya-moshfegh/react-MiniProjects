import Header from "./Header";
import AddForm from "./AddForm";

export default function BookList() {
  return (
    <div className="h-screen bg-yellow-100/70 py-4">
      <div className="container rounded-xl shadow-md bg-white mx-auto p-10 select-none">
        <Header />
        <AddForm />
      </div>
    </div>
  );
}
