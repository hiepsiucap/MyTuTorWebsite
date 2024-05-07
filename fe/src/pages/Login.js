/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CreateNewUser } from "../features/counter/UserSlice";
const Login = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const { email, password } = values;
    const loginUser = { email, password };
    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/login", {
        method: "POST",
        withCredntials: true,
        credentials: "include",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginUser),
      });
      if (!response.ok) {
        const msg = await response.json();
        toast.error(msg?.msg);
        setLoading(false);
        return;
      }
      const data = await response.json();
      if (data) {
        setValues({ name: "", email: "", password: "" });
        setLoading(false);
        console.log(data.user);
        dispatch(CreateNewUser(data.user));
        navigate("/");
        return;
      }
    } catch {
      setLoading(false);
      toast.error("Mạng không ổn định, kết nối server bị lỗi");
      return;
    }
  };
  return (
    <>
      <ToastContainer></ToastContainer>
      <h1 className=" text-4xl font-bold text-center py-10">Đăng Nhập</h1>
      <div className=" w-2/3 mx-auto bg-white my-10 flex py-20 shadow-lg">
        <div className=" w-1/2 border-r flex flex-col items-center">
          <img
            src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1708399491/student-mytutor-286x286_f538q4.png"
            alt=""
            className="w-1/2"
          />
          <h1 className=" text-4xl font-bold py-3">Best Tutor</h1>
          <p className=" text-lg italic">Chọn để dẫn đầu !</p>
        </div>
        <form
          className="w-1/2 flex flex-col space-y-5 justify-center"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col w-2/3 mx-auto space-y-1">
            <label
              for="fname"
              className=" text-opacity-80 text-base text-gray-700 font-bold"
            >
              Địa chỉ Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className=" text-sm outline outline-gray-300 outline-1 px-4 py-2 rounded-sm hover:outline-primary"
              placeholder="Nhập địa chỉ email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-2/3 mx-auto space-y-1">
            <label
              for="fname"
              className=" text-opacity-80 text-base text-gray-700 font-bold"
            >
              Mật khẩu :
            </label>
            <input
              type="text"
              id="password"
              name="password"
              className=" text-sm outline outline-gray-300 outline-1 px-4 py-2 rounded-sm hover:outline-primary"
              placeholder="Nhập mật khẩu của bạn"
              onChange={handleChange}
            />
          </div>
          {isLoading ? (
            <div className="mt-60 text-center flex items-center justify-center rounded-sm bg-green-800  w-2/3 mx-auto px-4 py-2 font-bold text-opacity-70 text-base hover:bg-lime-600 hover:text-white">
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          ) : (
            <button className="mt-60 rounded-sm bg-primary w-2/3 mx-auto px-4 py-2 font-bold text-opacity-70 text-base hover:bg-lime-600 hover:text-white">
              Đăng nhập
            </button>
          )}
          <div className="flex justify-between">
            <Link
              to="/forgotpassword"
              className="text-sm italic text-gray-400 mx-auto"
            >
              Quên mật khẩu ?
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
export default Login;
