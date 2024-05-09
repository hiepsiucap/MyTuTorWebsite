/** @format */
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { links } from "../utils/constant";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Logout } from "../features/counter/UserSlice";
import { ToastContainer, toast } from "react-toastify";
const NavBar = () => {
  const dispatch = useDispatch();
  const LogoutHandler = async () => {
    const response = await fetch("http://localhost:4000/api/v1/auth/logout", {
      method: "POST",
      withCredntials: true,
      credentials: "include",
    });
    if (response.ok) {
      toast.success("Đăng xuất thành công");
      dispatch(Logout());
    } else {
      toast.error("Đăng xuất thất bại ");
    }
  };
  const location = useLocation();
  const [isopen, open] = useState(false);
  const focusonHandler = () => {
    open(true);
  };
  const focusoutHandler = () => {
    open(false);
  };
  console.log(location);
  const user = useSelector((state) => state.user);
  const name = user.name.split(" ");
  return (
    <>
      <ToastContainer></ToastContainer>
      <nav className="container-md">
        <div className="flex justify-between items-center px-2 py-2">
          <Link to="/">
            <img src={logo} alt="" className="w-32 h-16" />
          </Link>
          <div className=" flex justify-between space-x-12 flex-row">
            {links.map((link) => {
              return (
                <div>
                  <Link
                    to={link.url}
                    id={link.id}
                    className={
                      location.pathname === link.url
                        ? "font-sans text-sm pb-1 border-b-2  border-primary px-2"
                        : "font-sans text-sm pb-1 px-1"
                    }
                  >
                    {link.text}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex space-x-4 justify-between items-center m-4 row-end-5 relative">
            <p className=" text-sm font-bold px-4">(+84) 355303443</p>
            {user.isSign ? (
              <>
                <p
                  className=" font-bold text-lg"
                  onMouseOver={focusonHandler}
                  onMouseLeave={focusoutHandler}
                >
                  {name[0]} {name[1]}
                </p>
                <div
                  className="p-6 absolute  -bottom-80 translate-y-4 translate-x-6  right-2"
                  onMouseOver={focusonHandler}
                  onMouseLeave={focusoutHandler}
                >
                  <div
                    className={
                      isopen
                        ? " bg-white py-6 pl-4 pr-8 flex flex-col space-y-6 right-2 shadow-md rounded-sm z-30"
                        : "hidden"
                    }
                  >
                    <Link
                      to="/profile"
                      className=" text-sm font-medium text-gray-600 border-b pb-2 border-gray-200 flex justify-start items-center space-x-2"
                    >
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
                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                        />
                      </svg>
                      <p>Thông tin cá nhân </p>
                    </Link>

                    <Link className="text-sm font-medium text-gray-600 border-b pb-2 border-gray-200 flex justify-start items-center space-x-2">
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
                          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                        />
                      </svg>
                      <p> Các lớp đã đăng ký </p>
                    </Link>
                    <Link
                      to="/recenttutor"
                      className=" text-sm font-medium text-gray-600 border-b pb-2 border-gray-200 flex justify-start items-center space-x-2"
                    >
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
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                      <p> Giáo viên gần đây</p>
                    </Link>
                    <Link
                      to="/chat"
                      className=" text-sm font-medium text-gray-600 border-b pb-2 border-gray-200 flex justify-start items-center space-x-2"
                    >
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
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                        />
                      </svg>
                      <p> Tin nhắn gần đây</p>
                    </Link>
                    <Link
                      to="/"
                      onClick={LogoutHandler}
                      className=" text-sm font-medium text-gray-600 border-b pb-2 border-gray-200 flex justify-start items-center space-x-2 "
                    >
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
                          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                        />
                      </svg>
                      <p> Đăng xuất</p>
                    </Link>
                  </div>
                </div>
                <img
                  src={user.ava}
                  className=" rounded-full w-12 h-12"
                  alt=""
                  onMouseOver={focusonHandler}
                  onMouseLeave={focusoutHandler}
                />
              </>
            ) : (
              <div className=" relative ">
                <Link
                  to="/login"
                  className="flex px-6 py-3 text-sm rounded-lg font-md font-sans font-medium bg-primary "
                >
                  Đăng nhập
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
