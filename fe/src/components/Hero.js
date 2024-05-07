/** @format */
import hero from "../assets/hero.png";
const Hero = () => {
  return (
    <>
      <section className="sm:container mx-auto flex py-24 px-10 justify-between space-x-20 items-center">
        <div className="flex flex-col space-y-6 w-1/2">
          <h1 className="text-5xl  font-bold font-sans leading-tight">
            KẾT NỐI TRI THỨC,<br></br>PHÁT HUY TIỀM NĂNG
          </h1>
          <p>
            "Chúng tôi không thể ngăn bạn lo lắng về con của mình. Nhưng các gia
            sư chuyên gia của chúng tôi có thể giúp nâng cao điểm số và sự tự
            tin của họ - và giúp bạn lo lắng ít hơn một chút."
          </p>
          <div className="flex shadow-sm">
            <div className="flex justify-between items-center pr-2 bg-white">
              <input
                className="text-lg px-4 py-3 "
                placeholder="Chọn môn học"
              ></input>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <button className="px-8 py-3 text-lg rounded-md font-md font-sans font-medium bg-primary w">
              Bắt đầu ngay
            </button>
          </div>
        </div>
        <div>
          <img src={hero} alt="" className="" />
        </div>
      </section>
    </>
  );
};
export default Hero;
