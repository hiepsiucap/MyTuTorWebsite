/** @format */
import hero from "../assets/6025552d61832b16ab09cf85_Tutors Hero Image-p-1080.png";
import yello from "../assets/brand-shape4.svg.png";
import pink from "../assets/brand-shape3.svg.png";
import monitor from "../assets/List → Listitem → 60128f5090d9dc56e2c23c49_Laptop-pull-out-Copy-p-800.png.png";
import { Link } from "react-router-dom";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import icon from "../assets/Heading 2 → Strong → “.svg";
import ava1 from "../assets/ava1.png.png";
import ava2 from "../assets/ava2.png.png";
import ava3 from "../assets/ava3.png.png";
import ava4 from "../assets/ava4.png.png";

const FindTuTorHero = () => {
  return (
    <>
      <section className="md:container mx-auto py-10 pt-20 justify-between items-center">
        <div className=" flex flex-col space-y-5 items-start">
          <h1 className=" font-bold text-5xl">
            Gia sư riêng phù hợp với lịch của bạn
          </h1>
          <h5 className=" font-medium ">
            Tìm gia sư riêng hoàn hảo của bạn và sắp xếp Cuộc họp video miễn
            phí.
          </h5>
          <button className="px-5 py-3 bg-primary font-bold text-base rounded-md">
            Đặt lịch gia sư
          </button>
          <div className="flex items-center">
            <svg
              width="32"
              height="28"
              viewBox="0 0 40 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.041 14.3908H24.2517L19.6832 0.313721L15.1005 14.3884L0.311249 14.3755L12.2879 23.0839L7.70648 37.1458L19.6832 28.4514L31.6458 37.1458L27.0772 23.0839L39.041 14.3896V14.3908Z"
                fill="#00B67A"
              />
            </svg>
            <h1 className=" font-medium text-xl mt-1">TrustPilot</h1>
            <h1 className="font-bold text-2xl mt-1 ml-2">4.9/5</h1>
          </div>
        </div>
      </section>
    </>
  );
};
export default FindTuTorHero;
