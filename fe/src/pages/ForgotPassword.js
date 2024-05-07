/** @format */

import { Link } from "react-router-dom";

const ForgotPassWord = () => {
  return (
    <>
      <h1 className=" text-4xl font-bold text-center py-10">Quên mật khẩu</h1>
      <div className=" w-1/2 mx-auto bg-white my-10 flex py-20 shadow-lg">
        <div className=" w-1/2 border-r flex flex-col items-center">
          <img
            src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1708399491/student-mytutor-286x286_f538q4.png"
            alt=""
            className="w-1/2"
          />
        </div>
        <form className="w-1/2 flex flex-col space-y-5">
          <div className="flex flex-col w-2/3 mx-auto space-y-1">
            <label
              for="fname"
              className=" text-opacity-80 text-sm text-gray-700"
            >
              Địa chỉ Email:
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              className=" text-sm outline outline-gray-300 outline-1 px-4 py-2 rounded-sm hover:outline-primary"
              placeholder="Nhập địa chỉ email"
            />
          </div>

          <button className=" mt-60 rounded-sm bg-primary w-2/3 mx-auto px-4 py-2 font-bold text-opacity-70 text-sm hover:bg-lime-600 hover:text-white">
            Gửi mã xác nhận
          </button>
          <div className="flex justify-between">
            <Link className="text-sm italic text-gray-400 mx-auto">
              Đã nhớ tài khoản ?
            </Link>
            <Link to="/signup" className="text-sm italic text-gray-400 mx-auto">
              Chưa có tài khoản ?
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
export default ForgotPassWord;
