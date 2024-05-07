/** @format */
import { Link } from "react-router-dom";
import book from "../assets/book-pencil.svg.svg";
const StudyResource = () => {
  return (
    <section className="p-20 ml-40 sm:container relative  z-10 flex items-center justify-center space-x-44">
      <h1 className=" font-bold text-7xl leading-normal tracking-wide z-10">
        Tài liệu <br /> miễn phí
      </h1>
      <div className="flex flex-col space-y-10 w-1/2 pl-32">
        <p className="w-2/3 font-medium text-xl">
          Hơn một triệu học sinh sử dụng tài nguyên miễn phí của chúng tôi để
          giúp họ với bài tập về nhà.
        </p>
        <Link className="w-1/2 text-center font-bold px-6 py-3 text-xl rounded-lg font-md font-sans  bg-primary w">
          Kho tài liệu
        </Link>
      </div>
      <img
        src={book}
        alt=""
        className=" absolute left-1/4 -translate-x-44  top-20 -z-10"
      />
    </section>
  );
};
export default StudyResource;
