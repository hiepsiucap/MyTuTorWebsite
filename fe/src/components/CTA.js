/** @format */
import pink from "../assets/brand-shape3.svg.png";
import yellow from "../assets/brand-shape4.svg.png";
import { Link } from "react-router-dom";
const CTA = () => {
  return (
    <>
      <div className=" flex justify-around py-20 relative overflow-hidden flex-col items-center">
        <h1 className=" text-4xl font-bold text-center mx-auto w-1/2 ">
          Đặt một cuộc hẹn miễn phí với một gia sư ngay hôm nay và tìm hiểu cách
          họ có thể giúp đỡ cho con của bạn.
        </h1>
        <Link className="px-8 py-3 text-xl rounded-lg font-bold font-sans  bg-primary mt-10">
          Tìm kiếm ngay
        </Link>
        <img src={pink} className=" absolute -left-20" alt="" />
        <img src={yellow} className=" absolute -right-20" alt="" />
      </div>
    </>
  );
};
export default CTA;
