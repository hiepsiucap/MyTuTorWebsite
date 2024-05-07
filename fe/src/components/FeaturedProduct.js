/** @format */
import { Link } from "react-router-dom";
import featured1 from "../assets/brand-image-for-feature-1.svg fill.png";
import featured2 from "../assets/brand-image-for-feature-2.svg fill.png";
import featured3 from "../assets/brand-image-for-feature-3.svg fill.png";
import featured4 from "../assets/brand-image-for-feature-4.svg.png";

const FeaturedProduct = () => {
  return (
    <section className="pt-20 flex flex-col items-center space-y-10">
      <h1 className=" font-bold text-4xl text-center">
        {" "}
        CHỌN MÔN HỌC MÀ BẠN MUỐN HỌC
      </h1>
      <div className="flex space-y-4 flex-col items-center">
        <div className="flex space-x-4">
          <Link className="px-4 py-4 bg-white text-xl font-bold rounded-sm hover:bg-primary">
            Toán học
          </Link>
          <Link className="px-4 py-4 bg-white text-xl font-bold rounded-sm hover:bg-primary">
            Tiếng Anh
          </Link>
          <Link className="px-4 py-4 bg-white text-xl font-bold rounded-sm hover:bg-primary">
            Hoá Học
          </Link>
          <Link className="px-4 py-4 bg-white text-xl font-bold rounded-sm hover:bg-primary">
            Vật lý
          </Link>
          <Link className="px-4 py-4 bg-white text-xl font-bold rounded-sm hover:bg-primary">
            Sinh học
          </Link>
          <Link className="px-4 py-4 bg-white text-xl font-bold rounded-sm hover:bg-primary">
            Tiếng Pháp
          </Link>
          <Link className="px-4 py-4 bg-white text-xl font-bold rounded-sm hover:bg-primary">
            Tin Học
          </Link>
          <Link className="px-4 py-4 bg-white text-xl font-bold rounded-sm hover:bg-primary">
            Tiếng đức
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link className="px-4 py-4 bg-white text-xl font-bold rounded-sm hover:bg-primary">
            Toán học
          </Link>
          <Link className="px-4 py-4 bg-white text-xl font-bold rounded-sm hover:bg-primary">
            Tiếng Anh
          </Link>
          <Link className="px-4 py-4 bg-white text-xl font-bold rounded-sm hover:bg-primary">
            Hoá Học
          </Link>
          <Link className="px-4 py-4 bg-white text-xl font-bold rounded-sm hover:bg-primary">
            Vật lý
          </Link>
          <Link className="px-4 py-4 bg-white text-xl font-bold rounded-sm hover:bg-primary">
            Sinh học
          </Link>
          <Link className="px-4 py-4 bg-white text-xl font-bold rounded-sm hover:bg-primary">
            Tiếng Pháp
          </Link>
        </div>
      </div>
      <div className="mt-10 flex sm:container px-10 py-10 items-center justify-between">
        <div className="w-1/2 flex flex-col space-y-5 ">
          <h2 className=" text-4xl leading-snug font-bold">
            {" "}
            Dễ dàng đạt thu nhập lên tới 200.000 đồng/1 giờ
          </h2>
          <p className=" mr-10">
            Chúng tôi rất (rất) kỹ tính trong việc chọn người hướng dẫn trên nền
            tảng của chúng tôi - chỉ có 1 trong 8 người đăng ký mới được chấp
            nhận. Họ là những chuyên gia trong hơn 30 chủ đề từ KS2 lên đến GCSE
            và A Level. Bởi vì họ đến từ các trường đại học ở Vương quốc Anh, họ
            đã học (và vượt qua) những khóa học giống như học sinh thiếu niên
            của bạn trong vài năm qua.
          </p>
        </div>
        <div>
          <img src={featured1} alt="" />
        </div>
      </div>
      <div className="mt-10 flex sm:container px-10 py-10 items-center justify-between">
        <div>
          <img src={featured2} alt="" />
        </div>
        <div className="w-1/2 flex flex-col space-y-5 ">
          <h2 className=" text-4xl leading-snug font-bold tracking-wide">
            {" "}
            Được sự tin tưởng của cả phụ huynh, giáo viên
          </h2>
          <p className=" mr-10">
            MyTutor là nền tảng gia sư được tin tưởng nhất tại Vương quốc Anh
            theo đánh giá của các bậc phụ huynh. Chúng tôi có điểm đánh giá
            4.6/5 trên Trustpilot từ hàng triệu (và đang tiếp tục tăng!) bài học
            mà chúng tôi đã thực hiện cho đến nay. Và bởi vì các gia sư của
            chúng tôi đạt được kết quả tốt, nhiều trường học sử dụng họ để hỗ
            trợ quá trình giảng dạy. Chúng tôi hợp tác với hơn 650 trường trên
            khắp Vương quốc Anh,
          </p>
        </div>
      </div>
      <div className="mt-10 flex sm:container px-10 py-10 items-center justify-between">
        <div className="w-1/2 flex flex-col space-y-5 ">
          <h2 className=" text-4xl leading-snug font-bold">
            {" "}
            Sự giúp đỡ từ đội ngũ của chúng tôi, mỗi bước trong hành trình của
            bạn.
          </h2>
          <p>
            Đội ngũ chuyên gia của chúng tôi về việc ghép đôi gia sư có thể kết
            hợp con của bạn với người hướng dẫn hoàn hảo cho nhu cầu của họ - từ
            môn học và cấp độ, cho đến cả bảng kiểm tra và sự phù hợp về tính
            cách. Họ luôn sẵn sàng lắng nghe, trả lời câu hỏi và cung cấp hỗ trợ
            cá nhân mà bạn cần.
          </p>
        </div>
        <div>
          <img src={featured3} alt="" />
        </div>
      </div>
      <div className="mt-10 flex sm:container px-10 py-10 items-center justify-between">
        <div>
          <img src={featured4} alt="" />
        </div>
        <div className="w-1/2 flex flex-col space-y-5 ">
          <h2 className=" text-4xl leading-snug font-bold">
            {" "}
            không gian học tương tác làm cho bài học trở nên hấp dẫn.
          </h2>
          <p>
            Các bài học của chúng tôi không chỉ là cuộc gọi video. Tất cả đều
            diễn ra trong không gian học tương tác được tạo riêng cho chúng tôi.
            Do đó, các gia sư có thể làm cho các khái niệm khó hiểu trở nên sống
            động với các bài tập tương tác, vẽ biểu đồ ngay khi diễn giảng, cùng
            chú thích bài tập về nhà và câu hỏi thực hành cùng nhau. Điều này
            thậm chí còn khiến cho những chủ đề đáng sợ - chúng ta có thể nói là
            những bài học thú vị.
          </p>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProduct;
