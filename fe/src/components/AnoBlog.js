/** @format */
import BlogCompo from "./BlogCompo";
import { anoblog } from "../utils/constant";
import book from "../assets/book-pencil.svg.svg";
import book2 from "../assets/book2.png";
const AnoBlog = () => {
  return (
    <>
      <section className="w-3/4 mx-auto">
        <div className=" grid grid-cols-3 gap-16 pt-5 pb-20">
          {anoblog.map((b) => (
            <BlogCompo b={b}></BlogCompo>
          ))}
        </div>
      </section>
      <section className=" bg-white space-x-5 flex justify-center items-center py-10 mt-10 ">
        <h1 className=" text-lg font-medium">
          Nhận các blog mới nhất của chúng tôi được gửi thẳng vào email của bạn.
        </h1>
        <button className=" bg-primary font-bold text-base text-center px-6 py-3 rounded-md">
          Đăng nhập
        </button>
      </section>
    </>
  );
};
export default AnoBlog;
