/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CreateNewUser } from "../features/counter/UserSlice";
import Swal from "sweetalert2";
const SignUp = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    role: "",
  });
  const showSwal = () => {
    Swal.fire({
      title: "Đăng kí thành công vui lòng kiểm tra email của bạn !!",
      icon: "success",
      confirmButtonText: "Trở về trang chủ",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };
  const [isLoading, setLoading] = useState(false);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const { email, password, name, role } = values;
    const RegisterUser = { email, password, name, role };
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/auth/register",
        {
          method: "POST",
          withCredntials: true,
          headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(RegisterUser),
        }
      );
      if (!response.ok) {
        const msg = await response.json();
        toast.error(msg?.msg || "Đã xảy ra lỗi vui lòng thử lại !");
        setLoading(false);
        return;
      }
      const data = await response.json();
      if (data) {
        setValues({ name: "", email: "", password: "" });
        setLoading(false);
        showSwal();
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
      <h1 className=" text-5xl font-bold text-center py-10">Đăng kí</h1>
      <div className=" w-2/3 mx-auto bg-white my-10 flex py-20 shadow-lg">
        <div className=" w-1/2 border-r flex flex-col items-center justify-center">
          <img
            src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1708399491/student-mytutor-286x286_f538q4.png"
            alt=""
            className="w-1/2"
          />
          <h1 className=" text-4xl font-bold py-3">Best Tutor</h1>
          <p className=" text-lg italic">Chọn để dẫn đầu !</p>
        </div>
        <form className="w-1/2 flex flex-col space-y-5" onSubmit={onSubmit}>
          <div className="flex flex-col w-2/3 mx-auto space-y-1">
            <label
              for="fname"
              className=" text-opacity-80 text-sm text-gray-700"
            >
              Địa chỉ Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="  outline outline-gray-300 outline-1 px-4 py-2 rounded-sm hover:outline-primary"
              placeholder="Nhập địa chỉ email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-2/3 mx-auto space-y-1">
            <label
              for="fname"
              className=" text-opacity-80 text-sm text-gray-700"
            >
              Họ Và Tên:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="outline outline-gray-300 outline-1 px-4 py-2 rounded-sm hover:outline-primary"
              placeholder="Nhập địa chỉ email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-2/3 mx-auto space-y-1">
            <label
              for="fname"
              className=" text-opacity-80 text-sm text-gray-700"
            >
              Bạn là (gia sư, học sinh, phụ huynh):
            </label>
            <select
              name="role"
              id="role"
              className=" outline outline-gray-300 outline-1 pr-2 py-2 rounded-sm hover:outline-primary"
              onChange={handleChange}
            >
              <option value="tutor" className=" text-gray-700 text-sm"></option>
              <option value="tutor">Gia sư</option>
              <option value="parent">Phụ Huynh</option>
              <option value="student">Học Sinh</option>
            </select>
          </div>
          <div className="flex flex-col w-2/3 mx-auto space-y-1">
            <label
              for="fname"
              className=" text-opacity-80 text-sm text-gray-700"
            >
              Mật khẩu :
            </label>
            <input
              type="text"
              id="password"
              name="password"
              className="  outline outline-gray-300 outline-1 px-4 py-2 rounded-sm hover:outline-primary"
              placeholder="Nhập mật khẩu của bạn"
              onChange={handleChange}
            />
          </div>
          <button className=" mt-60 rounded-sm bg-primary w-2/3 mx-auto px-4 py-2 font-bold text-opacity-70  hover:bg-lime-600 hover:text-white">
            Đăng kí
          </button>
          <Link to="/login" className="text-sm italic text-gray-400 mx-auto">
            Đã có tài khoản ?
          </Link>
        </form>
      </div>
    </>
  );
};
export default SignUp;
