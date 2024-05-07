/** @format */
import avatar from "../assets/Example-tutor-cards-BG.jpg";
import tutor from "../assets/tutorial-branded-2021.png";
import example from "../assets/busy-parent-2020.png";
const FeaturedTuTor = () => {
  return (
    <>
      <section className="w-3/4 mx-auto m-5 flex flex-col space-y-20">
        <div className=" flex justify-center space-x-32 items-center">
          <div className=" flex flex-col space-y-5 w-1/3 justify-center items-center">
            <h1 className=" font-bold text-4xl">Tìm gia sư phù hợp với bạn</h1>
            <h5 className="text-sm font-md">
              Khi bạn tìm thấy một gia sư mà bạn thích, sắp xếp một cuộc trò
              chuyện video miễn phí trong vòng 15 phút để đặt câu hỏi và tìm
              hiểu thêm về phong cách giảng dạy của họ - và đảm bảo rằng họ là
              người mà con bạn sẽ thích. Tất cả đều được thực hiện trực tuyến,
              vì vậy bạn có thể trò chuyện trước bữa sáng.
            </h5>
          </div>
          <div className="w-1/2 flex items-center">
            <img src={avatar} alt="" className=" w-11/12 items-center flex" />
          </div>
        </div>
        <div className=" flex justify-center space-x-32 items-center">
          <div className="w-1/2 flex items-center">
            <img src={tutor} alt="" className=" w-11/12 items-center flex" />
          </div>
          <div className=" flex flex-col space-y-8 w-1/3 justify-center items-center">
            <h1 className=" font-bold text-4xl">
              Gặp gỡ gia sư miễn phí trước khi học.
            </h1>
            <h5 className="text-sm font-md">
              Khi bạn tìm thấy một gia sư bạn thích, hãy sắp xếp một cuộc trò
              chuyện video miễn phí trong vòng 15 phút để đặt câu hỏi và tìm
              hiểu thêm về phong cách giảng dạy của họ - và đảm bảo rằng họ là
              người mà con bạn sẽ thích. Tất cả đều được thực hiện trực tuyến,
              vì vậy bạn có thể trò chuyện trước bữa sáng, sau bữa tối.
            </h5>
          </div>
        </div>
        <div className=" flex justify-center space-x-32 items-center">
          <div className=" flex flex-col space-y-5 w-1/3 justify-center items-center">
            <h1 className=" font-bold text-4xl">
              Nó linh hoạt và tiết kiệm thời gian
            </h1>
            <h5 className="text-sm font-md">
              Những bài học với BestTutor dễ dàng tích hợp vào cuộc sống gia
              đình. Đặt các buổi học với gia sư mỗi khi bạn muốn và chỉ thanh
              toán khi bạn sử dụng dịch vụ. Hơn nữa, việc học trực tuyến giúp
              bạn loại bỏ chi phí đi lại. Bạn cũng có cùng một gia sư mỗi lần,
              dù bạn đang ở trường trước giờ đá bóng, ở nhà của bà, hay đang đi
              nghỉ.
            </h5>
          </div>
          <div className="w-1/2 flex items-center">
            <img src={example} alt="" className=" w-11/12 items-center flex" />
          </div>
        </div>
      </section>
      <section className="w-2/3 mx-auto my-24">
        <div className="flex space-x-10">
          <div className="flex flex-col text-center space-y-4">
            <h2 className=" font-bold text-2xl">Gia sư hàng đầu</h2>
            <p className=" font-md">
              Chúng tôi tự mình phỏng vấn mỗi gia sư và chỉ chấp nhận 1 trong 8
              ứng viên.
            </p>
          </div>
          <div className="flex flex-col text-center space-y-4">
            <h2 className=" font-bold text-2xl">Riêng tư, Bảo mật</h2>
            <p className=" font-md">
              Chúng tôi tự mình phỏng vấn mỗi gia sư và chỉ chấp nhận 1 trong 8
              ứng viên.
            </p>
          </div>
          <div className="flex flex-col text-center space-y-4">
            <h2 className=" font-bold text-2xl">Ghi chú miễn phí</h2>
            <p className=" font-md">
              Hơn 1 triệu học sinh sử dụng tài nguyên miễn phí của chúng tôi để
              hỗ trợ việc làm bài tập hàng tháng.
            </p>
          </div>
        </div>
      </section>
      <section className=" border-t border-gray-300 border-opacity-40 py-20 text-center flex flex-col items-center">
        <h2 className=" text-3xl font-bold">
          Trò chuyện với một gia sư và sắp xếp việc học ngay hôm nay.
        </h2>
        <button className=" bg-primary py-3 px-6 text-lg font-bold tracking-wide rounded-md mt-12">
          Tìm gia sư
        </button>
      </section>
    </>
  );
};
export default FeaturedTuTor;
