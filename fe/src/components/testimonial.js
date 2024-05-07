/** @format */
import EachTestimonial from "./EachTestimonial";
import { testimonial } from "../utils/constant";
const Testimonial = () => {
  return (
    <section className="mx-auto mt-20 sm:container flex flex-col space-y-20 mb-10">
      <h1 className="px-10 text-4xl w-1/2 font-bold">
        "Hàng nghìn phụ huynh, học sinh và giáo viên đã đánh giá chúng tôi với
        điểm 4.7/5.
      </h1>
      <div className=" px-10 flex justify-around  space-x-10 shadow-sm rounded-sm w-full flex-grow ">
        {testimonial.map((t) => {
          return <EachTestimonial test={t}></EachTestimonial>;
        })}
      </div>
    </section>
  );
};
export default Testimonial;
