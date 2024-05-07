/** @format */
import { useEffect, useState } from "react";
import { profile } from "../utils/constant";
import "react-toastify/dist/ReactToastify.css";

import { Link, json } from "react-router-dom";
import { formatDate } from "../utils/helpers";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { changeava, CreateNewUser } from "../features/counter/UserSlice";
const Profile = () => {
  const [isLoading, ChangeLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(
      "http://localhost:4000/api/v1/users/profile",
      {
        method: "GET",
        withCredntials: true,
        credentials: "include",
      },
      signal
    )
      .then((res) => res.json())
      .then((data) => ChangeInfo(data.user))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("cancelled");
        }
      });
    return () => {
      console.log("cancelled!");
      controller.abort();
    };
  }, []);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const onSubmit = () => {};
  const [userinfo, ChangeInfo] = useState({
    name: "",
    address: "",
    birth: "",
    phonenumber: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    ChangeInfo({ ...userinfo, [e.target.name]: e.target.value });
  };
  console.log(userinfo);
  const [file, filechange] = useState();
  const onChangefileHandler = (e) => {
    filechange(e.target.files[0]);
  };
  const onSumbitFileHanlder = async (e) => {
    e.preventDefault();
    const uploadData = new FormData();
    const data = file;
    if (!data) {
      toast.error("Vui lòng thêm ảnh muốn đổi");
      return;
    }
    ChangeLoading(true);
    uploadData.append("file", data, "file");
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/users/uploadfile",
        {
          method: "POST",
          withCredntials: true,
          credentials: "include",
          headers: {
            Accept: "application/form-data",
          },
          body: uploadData,
        }
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(changeava(data.ava));
        console.log(data);
        ChangeLoading(false);
      } else {
        toast.error(response.json()?.msg || "Thay đổi avatar thất bại");
        ChangeLoading(false);
      }
    } catch (error) {
      toast.error("Thay đổi avatar thất bại");
      ChangeLoading(false);
    }
  };
  const onSubmitChangeHandler = async (e) => {
    e.preventDefault();
    const data = {
      phonenumber: userinfo.phonenumber,
      name: userinfo.name,
      birth: userinfo.birth,
      address: userinfo.address,
    };
    console.log(data);
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/users/update",
        {
          method: "PATCH",
          withCredntials: true,
          credentials: "include",
          headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("Thay đổi thông tin thành công!");
        const data = await response.json();
        dispatch(CreateNewUser(data.user));
        console.log(data);
        return;
      } else {
        toast.error(response.json()?.msg || "Thay đổi thông tin thất bại ");
      }
    } catch (error) {
      toast.error("Kết nối không ổn định, vui lòng thử lại");
    }
  };
  return (
    <section className="mx-auto lg:container flex space-x-5">
      <ToastContainer autoClose={2000}></ToastContainer>
      <div className="w-4/5 bg-white py-10 px-5">
        <div className="flex  space-x-20 items-start w-full">
          <div className=" w-72  border-2 border-gray-200 mt-24 p-6 rounded-3xl bg-slate-50 ">
            <img src={user?.ava} alt="" className="" />
            <div className="">
              <div className="font-bold text-center text-lg text-gray-700">
                Thay đổi ảnh
              </div>
              <form
                onSubmit={onSumbitFileHanlder}
                action=""
                className=" flex flex-col "
              >
                <input
                  type="file"
                  className=" mt-2 ml-5 text-sm text-center"
                  onChange={onChangefileHandler}
                />
                <button className=" text-sm font-bold py-2 px-4 bg-primary rounded-lg mt-5 mx-auto text-center w-1/2 flex justify-center items-center">
                  {isLoading ? (
                    <div>
                      <svg
                        class="animate-spin  h-5 w-5 text-white"
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
                    <div>Thay đổi</div>
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className=" flex flex-col space-y-10 w-full">
            <h2 className=" font-bold text-4xl flex ">Thông tin cá nhân</h2>
            <form
              className="flex flex-col space-y-5 w-3/4"
              onSubmit={onSubmitChangeHandler}
            >
              <div className="flex flex-col  space-y-1 w-full">
                <label
                  for="fname"
                  className=" text-opacity-80 text-sm text-gray-700"
                >
                  Họ và tên:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="  outline outline-gray-300 outline-1 px-4 py-2 rounded-sm hover:outline-primary"
                  value={userinfo.name}
                  placeholder="Nhập vào tên của bạn"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col  space-y-1">
                <label
                  for="email"
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
                  value={userinfo.email}
                  onChange={handleChange}
                  disabled
                />
              </div>
              <div className="flex flex-col  space-y-1">
                <label
                  for="fname"
                  className=" text-opacity-80 text-sm text-gray-700"
                >
                  Ngày sinh:
                </label>
                <input
                  type="date"
                  id="birth"
                  name="birth"
                  value={formatDate(userinfo.birth)}
                  className="  outline outline-gray-300 outline-1 px-4 py-2 rounded-sm hover:outline-primary"
                  placeholder="Nhập địa chỉ email"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col  space-y-1">
                <label
                  for="fname"
                  className=" text-opacity-80 text-sm text-gray-700"
                >
                  Địa chỉ thường trú:
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="  outline outline-gray-300 outline-1 px-4 py-2 rounded-sm hover:outline-primary"
                  placeholder="Nhập địa chỉ thường trú"
                  value={userinfo.address}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col  space-y-1">
                <label
                  for="fname"
                  className=" text-opacity-80 text-sm text-gray-700"
                >
                  Bạn là (gia sư, học sinh, phụ huynh):
                </label>
                <select
                  name="role"
                  id="role"
                  value={userinfo.role}
                  className=" outline outline-gray-300 outline-1 pr-2 py-2 rounded-sm hover:outline-primary"
                  onChange={handleChange}
                  disabled
                >
                  <option value="" className=" text-gray-700 text-sm"></option>
                  <option value="tutor">Gia sư</option>
                  <option value="parent">Phụ Huynh</option>
                  <option value="student">Học Sinh</option>
                  disabled
                </select>
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  for="fname"
                  className=" text-opacity-80 text-sm text-gray-700"
                >
                  Số điện thoại :
                </label>
                <input
                  type="text"
                  id="phonenumber"
                  name="phonenumber"
                  className="  outline outline-gray-300 outline-1 px-4 py-2 rounded-sm hover:outline-primary"
                  placeholder="Nhập số điện thoại của bạn"
                  onChange={handleChange}
                  value={userinfo.phonenumber}
                />
              </div>
              <button className=" mt-60 rounded-lg bg-primary mx-auto px-6 py-4 r font-bold text-opacity-70  hover:bg-lime-600 hover:text-white">
                Thay đổi
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-1/3 bg-white">GetInTouch</div>
    </section>
  );
};
export default Profile;
