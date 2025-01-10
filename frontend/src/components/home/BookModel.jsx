import { AiOutlineAccountBook, AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModel = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 bg-gray-500">{book._id}</h4>
        <div className="flex justify-start books-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start books-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="my-2 text-justify">A book is a collection of written or printed pages bound together, often serving as a powerful medium for knowledge, storytelling, and creativity. It can explore diverse genres, from fiction and non-fiction to poetry, history, and science, catering to varied interests and age groups. Books inspire imagination, educate, and provide a window into different cultures, perspectives, and ideas. They can be physical objects, digital eBooks, or audiobooks, making them accessible in multiple formats. Whether for learning, entertainment, or self-reflection, books hold timeless value in personal and intellectual growth.</p>
      </div>
    </div>
  );
};

export default BookModel;
