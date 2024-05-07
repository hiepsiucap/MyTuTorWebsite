/** @format */
import start from "../assets/start.png";
import Yellowstart from "../assets/yellowstart";
const Rate = () => {
  return (
    <>
      <div className=" flex justify-around bg-white py-10">
        <div className="flex items-center space-x-2">
          <h1 className="font-bold text-2xl mt-1 ">20,000</h1>
          <Yellowstart />
          <h1 className="font-bold text-2xl mt-1 ">đánh giá</h1>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            width="40"
            height="38"
            viewBox="0 0 40 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.041 14.3908H24.2517L19.6832 0.313721L15.1005 14.3884L0.311249 14.3755L12.2879 23.0839L7.70648 37.1458L19.6832 28.4514L31.6458 37.1458L27.0772 23.0839L39.041 14.3896V14.3908Z"
              fill="#00B67A"
            />
          </svg>
          <h1 className=" font-medium text-2xl mt-1">TrustPilot</h1>
          <h1 className="font-bold text-2xl mt-1 ">4.9/5</h1>
        </div>
        <div className="flex items-center space-x-2">
          <h1 className="font-bold text-2xl mt-1 ">
            Cộng đồng hơn 10,000+ sử dụng
          </h1>
        </div>
      </div>
    </>
  );
};
export default Rate;
