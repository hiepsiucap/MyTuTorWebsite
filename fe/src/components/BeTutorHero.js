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

const BeTutorHero = () => {
  return (
    <>
      <section className="sm:container mx-auto flex py-24 px-10 justify-between space-x-20 items-center">
        <div className="flex flex-col space-y-3 w-1/2">
          <h3 className=" font-bold text-2xl mb-3">
            Làm việc mọi lúc, mọi nơi
          </h3>
          <h1 className="text-7xl  font-bold font-sans tracking-tight">
            Trở thành <br></br> gia sư online
          </h1>
          <p>
            <h5 className="  text-sm">
              Linh hoạt, đầy đủ và phù hợp với lịch trình của bạn."
            </h5>
          </p>
          <div className="flex">
            <Link
              to="/signuptutor"
              className="px-8 py-3 mt-9 text-lg rounded-md font-md font-sans font-medium bg-primary w"
            >
              Bắt đầu ngay
            </Link>
          </div>
        </div>
        <div className="w-1/2 relative z-10 p-10">
          <img src={hero} alt="" className=" scale-150" />
          <img
            src={yello}
            alt=""
            className=" absolute top-0 right-0 w-1/2 -z-10"
          />
          <img
            src={pink}
            alt=""
            className=" absolute bottom-0 left-0 w-1/2 -z-10"
          />
        </div>
      </section>
      <section className="sm:container mx-auto flex py-24 px-10 justify-center space-x-20 items-center">
        <div className="flex flex-col space-y-3 w-1/2">
          <h1 className="text-4xl mb-2  font-bold font-sans tracking-tight">
            Tại sao nên làm gia sư trực tuyến?
          </h1>

          <h5 className="  text-sm w-3/4">
            Gia sư trực tuyến là công việc hoàn hảo cho sinh viên và người mới
            tốt nghiệp. Bạn sẽ kiếm được tiền, tích lũy kỹ năng giúp tăng cường
            hồ sơ CV và trải nghiệm cảm giác hạnh phúc khi giúp đỡ người khác.
          </h5>
        </div>
        <div className="w-1/2 relative z-10 p-10">
          <img
            src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1708502043/61166acc87809d14a48d5044_Hero_image_frame2_neqsqu.png"
            alt=""
            className=" scale-125"
          />
        </div>
      </section>
      <section className="sm:container mx-auto flex py-24 px-16  space-x-10 justify-center items-stretch ">
        <div className="flex flex-col shadow-2xl space-y-5 px-10 py-10 bg-white rounded-2xl w-1/3">
          <img
            src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1708502660/6005ab4527d8d92f6639f5e8_flexible-icon_hkxv2a.svg"
            alt=""
            className=" pt-14 w-24 pb-5"
          />
          <h4 className=" text-2xl font-bold"> Làm việc từ xa</h4>
          <p className="text-sm">
            Tất cả những gì bạn cần là một chiếc laptop và kết nối Wifi. Ngoài
            ra, không cần phải chi tiêu tiền cho việc đi lại - thật tuyệt vời.
          </p>
          <Link className="text-sm font-medium text-primary ">LEARN MORE</Link>
        </div>
        <div className="flex flex-col shadow-2xl space-y-5 px-10 py-10 bg-white rounded-2xl w-1/3">
          <img
            src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1708502664/6005ab709dec26273a4d36ee_well-paid-icon_i34pfu.svg"
            alt=""
            className="pt-10 w-24 pb-5"
          />
          <h4 className=" text-2xl font-bold"> Mức lương hấp dấn</h4>
          <p className="text-sm">
            Thu nhập từ 200.000-300.000 đồng 1 tháng, không quan trọng kinh
            nghiệm
          </p>
          <Link className="text-sm font-medium text-primary pt-10 ">
            LEARN MORE
          </Link>
        </div>
        <div className="flex flex-col shadow-2xl space-y-5 px-10 py-10 bg-white rounded-2xl w-1/3">
          <img
            src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1708502671/6005ab0a8451baaf1b4aefe6_Rewarding-icon_vp2apd.svg"
            alt=""
            className="pt-10 w-24 pb-5"
          />
          <h4 className=" text-2xl font-bold"> Được đánh giá cao</h4>
          <p className="text-sm">
            Bạn sẽ giúp định hình giáo dục cho những học sinh cần nó nhất.
          </p>
          <Link className="text-sm font-medium text-primary pt-10">
            LEARN MORE
          </Link>
        </div>
      </section>
      <section className="sm:container mx-auto flex py-24 justify-center space-x-10 items-center">
        <div className="flex flex-col space-y-3 w-1/3">
          <h1 className="text-6xl mb-2  font-bold font-sans tracking-normal ">
            BestTutor hoạt động thế nào?
          </h1>

          <h5 className="  text-sm w-3/4">
            Dưới đây là một cái nhìn sơ bộ về không gian học trực tuyến của
            chúng tôi; đây là nơi bạn sẽ truyền đạt sự hướng dẫn quan trọng cho
            những học sinh cần nó nhất. Và tất cả đều nằm trong tầm tay của tất
            cả mọi lứa tuổi!
          </h5>
        </div>
        <div className="w-1/2 relative z-10 p-10 ">
          <img src={monitor} alt="" className=" scale-125" />
          <button className=" absolute top-1/2 right-1/2 text-sm bg-primary px-4 py-2 rounded-md font-bold translate-x-1/2 -translate-y-1/2">
            Xem Video
          </button>
        </div>
      </section>
      <section className="sm:container mx-auto flex flex-col space-y-20 py-24 justify-center  items-center">
        <div className="  mx-auto flex justify-center space-x-10 items-center">
          <div className="w-1/2">
            <h4 className=" text-3xl font-bold w-3/4 mb-5">
              Chia sẻ kỹ năng của bạn với những đứa trẻ thực sự cần nó{" "}
            </h4>
            <p className="text-sm w-3/4">
              Bạn sẽ tạo ra sự khác biệt thực sự bằng cách hướng dẫn những học
              sinh có thể không có khả năng chi trả cho một gia sư như bạn.
            </p>
          </div>
          <div>
            <img src={pic1} alt="fff" />
          </div>
        </div>
        <div className="  mx-auto flex justify-center space-x-10 items-center">
          <div className="w-1/2">
            <h4 className=" text-3xl font-bold w-3/4 mb-5">
              Kiếm tiền ngay còn đi học
            </h4>
            <p className="text-sm w-3/4">
              Bạn sẽ tạo ra sự khác biệt thực sự bằng cách hướng dẫn những học
              sinh có thể không có khả năng chi trả cho một gia sư như bạn.
            </p>
          </div>
          <div>
            <img src={pic2} alt="fff" />
          </div>
        </div>
        <div className="  mx-auto flex justify-center space-x-10 items-center">
          <div className="w-1/2">
            <h4 className=" text-3xl font-bold w-3/4 mb-5">
              Làm đẹp CV của bạn
            </h4>
            <p className="text-sm w-3/4">
              Bạn không cần bất kỳ bằng cấp nào để tham gia! Trở thành một gia
              sư và bạn sẽ phát triển kỹ năng giao tiếp, lập kế hoạch và tổ chức
              - những điều mà tương lai nhà tuyển dụng của bạn sẽ đánh giá cao.
            </p>
          </div>
          <div>
            <img src={pic3} alt="fff" />
          </div>
        </div>
        <div className="  mx-auto flex justify-center space-x-10 items-center">
          <div className="w-1/2">
            <h4 className=" text-3xl font-bold w-3/4 mb-5">
              Nó linh hoạt, đầy đủ ý nghĩa và phù hợp với lịch trình của bạn.
            </h4>
            <p className="text-sm w-3/4">
              Phải đối mặt với việc quản lý đồng thời việc học đại học, làm việc
              bán thời gian, sở thích và cuộc sống xã hội có thể khá khó khăn.
              May mắn là tại MyTutor, chúng tôi giúp bạn dễ dàng tìm kiếm công
              việc gia sư trực tuyến, để bạn có thể làm việc nhiều hoặc ít tùy
              ý.
            </p>
          </div>
          <div>
            <img src={pic4} alt="fff" />
          </div>
        </div>
      </section>
      <section className="sm:container mx-auto py-24 ">
        <h1 className="text-6xl font-bold tracking-tight mb-10 ml-10">
          Các gia sư của trung tâm
        </h1>
        <div className=" pl-20 flex space-x-10 overflow-hidden py-10">
          <div className=" bg-primary2 px-5 py-5 flex flex-col items-center relative w-5/12 space-y-20 shadow-xl rounded-md flex-shrink-0">
            <img src={ava1} alt="" />
            <img
              src={icon}
              alt=""
              className=" absolute top-1/2 -translate-y-20 left-5"
            />
            <div>
              <p className="  tracking-normal p-5 text-gray-500">
                Việc mọi thứ đều trực tuyến là hoàn hảo đối với tôi, vì tôi
                thường xuyên di chuyển giữa nhà và trường đại học nên không thể
                cam kết với một công việc đều đặn - chưa kể đến những kỹ năng mà
                tôi đã phát triển có thể đặt vào CV của mình. Hơn hết, đó là một
                trải nghiệm đầy ý nghĩa - điều này khiến tôi tự hào khi biết
                rằng tôi đang tạo ra sự khác biệt thực sự. Tôi không thể giới
                thiệu BesTutor hơn được."
              </p>
              <p className="p-5 font-bold">Mary Tran</p>
            </div>
          </div>
          <div className=" bg-primary2 px-5 py-5 flex flex-col items-center relative w-5/12 space-y-20 shadow-lg rounded-md flex-shrink-0 scale-95">
            <img src={ava3} alt="" />
            <img
              src={icon}
              alt=""
              className=" absolute top-1/2 -translate-y-20 left-5"
            />
            <div>
              <p className="  tracking-normal p-5 text-gray-500">
                Việc mọi thứ đều trực tuyến là hoàn hảo đối với tôi, vì tôi
                thường xuyên di chuyển giữa nhà và trường đại học nên không thể
                cam kết với một công việc đều đặn - chưa kể đến những kỹ năng mà
                tôi đã phát triển có thể đặt vào CV của mình. Hơn hết, đó là một
                trải nghiệm đầy ý nghĩa - điều này khiến tôi tự hào khi biết
                rằng tôi đang tạo ra sự khác biệt thực sự. Tôi không thể giới
                thiệu BesTutor hơn được."
              </p>
              <p className="p-5 font-bold">Katie Nguyen</p>
            </div>
          </div>
          <div className=" bg-primary2 px-5 py-5 flex flex-col items-center relative w-5/12 space-y-20 shadow-md rounded-md flex-shrink-0 scale-90">
            <img src={ava2} alt="" />
            <img
              src={icon}
              alt=""
              className=" absolute top-1/2 -translate-y-20 left-5"
            />
            <div>
              <p className="  tracking-normal p-5 text-gray-500">
                Đã làm việc cho MyTutor được 3 năm và nửa, và nền tảng này đã
                phát triển mạnh mẽ. Điều ấn tượng nhất với tôi là chất lượng của
                lớp học trực tuyến. Nó hỗ trợ việc gia sư trực tuyến rất tốt với
                khả năng xem YouTube trực tiếp cùng nhau, vẽ, viết, sử dụng giấy
                kẻ ô và trò chuyện, tất cả đều có thể thực hiện tại một địa điểm
                duy nhất!
              </p>
              <p className="p-5 font-bold">Mary Tran</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-row-reverse px-5">
          <div className="  bg-primary ml-5 rounded-sm p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="bg-primary  rounded-sm p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="sm:container mx-auto flex flex-col space-y-20 py-10 justify-center  items-center">
        <div className="  mx-auto flex justify-center space-x-10 items-center">
          <div className="w-1/2">
            <h4 className=" text-3xl font-bold w-3/4 mb-5">
              Chúng tôi hỗ trợ bạn mọi lúc, mọi nơi
            </h4>
            <p className="text-sm w-3/4">
              Công việc gia sư trực tuyến không cần phải gây stress - chúng tôi
              sẽ tìm học sinh cho bạn, cung cấp đầy đủ đào tạo hữu ích và tài
              nguyên bài học, và luôn sẵn sàng trả lời mọi câu hỏi của bạn (hoặc
              đơn giản chỉ là để động viên bạn nếu bạn cần).
            </p>
            <button className="mt-5 py-3 px-5 bg-primary font-bold text-center text-lg text-gray-800">
              THAM GIA NGAY
            </button>
          </div>
          <div>
            <img src={pic1} alt="fff" />
          </div>
        </div>
        <div className="  mx-auto flex justify-between pl-10  items-center pt-20">
          <div className="w-1/2">
            <h4 className=" text-4xl font-bold space-x-10 w-3/4 mb-5">
              Tuyệt vời - bạn đã sẵn sàng để bắt đầu?
            </h4>
            <p className="text-sm w-3/4 mb-5 text-gray-600">
              Đăng kí rất đơn giản
            </p>
            <ul className=" list-disc ml-10 text-base flex flex-col">
              <li>Tạo tài khoản và điền vào form xin việc </li>
              <li>
                Đặt cuộc phỏng vấn video 15 phút với một gương mặt thân thiện từ
                nhân viên từ BestTuTor.
              </li>
              <li>Hoàn tất hồ sơ của bạn và bắt đầu kiếm tiền ngay!</li>
            </ul>
          </div>
          <div>
            <img src={pic2} alt="fff" />
          </div>
        </div>
      </section>
    </>
  );
};
export default BeTutorHero;
