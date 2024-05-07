/** @format */
import monitor from "../assets/How-it-works-hero-image-compressed-v2.png.png";
const HowItWorkHero = () => {
  return (
    <section className="mt-32">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-5">
          Học trực tuyến 1-1 giúp nâng cao điểm số
        </h1>
        <h2 className="text-3xl font-bold mb-10">
          Các bài học phù hợp với lịch trình của bạn, thoải mái như ở nhà
        </h2>
        <img src={monitor} alt="" />
      </div>
      <div className="w-2/3 mx-auto flex space-x-20 py-20 border-b border-gray-200 ">
        <div className="flex flex-col space-y-3 justify-center items-center">
          <div className=" bg-red-500 text-white text-4xl font-bold w-16 h-16 rounded-full flex justify-center items-center">
            1
          </div>
          <h4 className=" text-2xl font-bold">Dạy mặt đối mặt</h4>
          <p className="text-center">
            Học viên và giáo viên có thể nhìn thấy nhau thông qua video trực
            tiếp -xây dựng mối quan hệ.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-3">
          <div className=" bg-red-500 text-white text-4xl font-bold w-16 h-16 rounded-full flex justify-center items-center">
            2
          </div>
          <h4 className=" text-2xl font-bold">Chia sẻ, hợp tác</h4>
          <p className="text-center">
            Tải lên bài luận hoặc đề thi quá khứ, và cùng nhau làm ví dụ trên
            bảng trắng.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className=" bg-red-500 text-white text-4xl font-bold w-16 h-16 rounded-full flex justify-center items-center">
            3
          </div>
          <h4 className=" text-2xl font-bold">Xem lại bài học</h4>
          <p className="text-center">
            Các bài học được ghi lại, giúp học viên có thể xem lại sau này để ôn
            tập.
          </p>
        </div>
      </div>
    </section>
  );
};
export default HowItWorkHero;
