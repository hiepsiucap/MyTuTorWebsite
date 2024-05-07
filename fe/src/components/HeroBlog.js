/** @format */
import pink from "../assets/brand-shape3.svg.png";
import yellow from "../assets/brand-shape4.svg.png";
import { Link } from "react-router-dom";
import parents from "../assets/home_parents_card_image.png";
import students from "../assets/home_students_card_image.png";
import tutor from "../assets/home_tutors_card_image.png";
import back1 from "../assets/home_students_card_shape.svg fill.png";
import back2 from "../assets/home_parents_card_shape.svg fill.png";
import back3 from "../assets/home_tutors_card_shape.svg fill.png";
const HeroBlog = () => {
  return (
    <>
      <div className=" flex justify-around py-20 flex-col px-40">
        <h1 className=" text-6xl font-bold mb-5">BLOG HỌC TẬP</h1>
        <h2 className=" text-3xl font-bold">
          Hướng dẫn tư vấn giáo dục của bạn"
        </h2>
        <div className="flex justify-center space-x-28 mx-10 pt-80">
          <div className=" bg-white flex flex-col pt-5 pb-5 space-y-3 items-center text-center relative rounded-md shadow-lg z-10">
            <h5 className=" text-3xl font-bold ">Cho phụ huynh</h5>
            <p className=" text-sm w-3/4 pb-5">
              Tìm kiếm lời khuyên chuyên gia mới nhất để hỗ trợ học tập và sức
              khỏe tâm thần cho thanh thiếu niên của bạn
            </p>
            <Link className=" bg-primary py-4 px-6 font-bold text-center rounded-md">
              Tới phụ huynh' blog
            </Link>
            <img
              src={parents}
              alt=""
              className=" absolute -top-2/3 -translate-y-2"
            />
            <img
              src={back1}
              className=" absolute -top-3/4 -translate-y-14 -z-10"
              alt=""
            />
          </div>
          <div className=" bg-white flex flex-col pt-5 pb-5 space-y-3 items-center text-center relative rounded-md shadow-lg z-0">
            <h5 className=" text-3xl font-bold ">Cho học sinh</h5>
            <p className=" text-sm w-3/4 pb-5">
              Tìm kiếm lời khuyên chuyên gia mới nhất để hỗ trợ học tập và sức
              khỏe tâm thần cho thanh thiếu niên của bạn
            </p>
            <Link className=" bg-primary py-4 px-6 font-bold text-center rounded-md">
              Tới học sinh' blog
            </Link>
            <img
              src={students}
              alt=""
              className=" absolute -top-2/3 -translate-y-3"
            />
            <img
              src={back2}
              className=" absolute -top-3/4 -translate-y-14 -z-10"
              alt=""
            />
          </div>
          <div className=" relative ">
            <div className="flex flex-col pt-5 pb-5 space-y-3 items-center text-center relative rounded-md shadow-lg z-10 bg-white">
              <h5 className=" text-3xl font-bold ">Cho Gia Sư</h5>
              <p className=" text-sm w-3/4 pb-5">
                Tìm kiếm lời khuyên chuyên gia mới nhất để hỗ trợ học tập và sức
                khỏe tâm thần cho thanh thiếu niên của bạn
              </p>
              <Link className=" bg-primary py-4 px-6 font-bold text-center rounded-md">
                Tới gia sư' blog
              </Link>
              <img
                src={tutor}
                alt=""
                className=" absolute -top-2/3 -translate-y-8"
              />
            </div>
            <img
              src={back3}
              className=" absolute -top-3/4 -translate-y-14  z-1"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroBlog;
