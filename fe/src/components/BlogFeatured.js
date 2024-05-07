/** @format */
import BlogCompo from "./BlogCompo";
import { blog } from "../utils/constant";
import book from "../assets/book-pencil.svg.svg";
import book2 from "../assets/book2.png";
const BlogFeature = () => {
  return (
    <>
      <section className="w-3/4 mx-auto">
        <h5 className=" text-2xl font-bold">Nổi bật</h5>
        <div className="py-2 border-b border-gray-400"></div>
        <div className=" grid grid-cols-3 gap-16 pt-10">
          {blog.map((b) => (
            <BlogCompo b={b}></BlogCompo>
          ))}
        </div>
      </section>
      <section className=" bg-white flex flex-col items-center space-y-5 p-10 mt-10 relative overflow-hidden">
        <h1 className=" w-2/3 mx-auto text-4xl font-bold text-center leading-relaxed">
          Hơn một triệu học sinh sử dụng tài nguyên miễn phí của chúng tôi để
          giúp họ làm bài tập về nhà
        </h1>
        <button className=" bg-primary font-bold text-xl text-center px-6 py-3 rounded-md">
          tài liệu miễn phí
        </button>
        <img src={book} alt="" className=" absolute -left-20" />
        <img src={book2} alt="" className=" absolute -right-32 top-0" />
      </section>
    </>
  );
};
export default BlogFeature;
