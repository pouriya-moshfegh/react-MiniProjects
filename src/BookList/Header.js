import { FaBook } from 'react-icons/fa';

export default function Header() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl text-stone-800 text-center ">
      The  Numb
        <span className="text-yellow-600 uppercase tracking-wider hover:text-yellow-700 duration-150"> <FaBook className="inline text-[18px] md:text-[24px] relative bottom-[3px] "></FaBook>book </span>
        list
      </h1>
    </>
  );
}
