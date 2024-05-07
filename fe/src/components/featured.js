/** @format */
import start from "../assets/start.png";
import google from "../assets/1024px-Google_Meet_text_logo_(2020).svg.png";
import zoom from "../assets/chinh-sach-bao-mat-cua-phan-mem-zoom.jpg";
import team from "../assets/ms_teams_logo_ws.png";
import vnex from "../assets/logo_default.jpg";
import Yellowstart from "../assets/yellowstart";
const Featured = () => {
  return (
    <>
      <div className=" flex justify-center items-center bg-white py-5 space-x-20">
        <h2 className="font-bold text-xl">Được tài trợ bởi: </h2>
        <img src={google} alt="" className="w-64" />
        <img src={zoom} alt="" className="h-24 w-32" />
        <img src={team} alt="" className="h-24 w-48" />
        <img src={vnex} alt="" className="h-24 w-48" />
      </div>
    </>
  );
};
export default Featured;
