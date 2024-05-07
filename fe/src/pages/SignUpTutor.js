/** @format */
import { useEffect, useState } from "react";
import { profile } from "../utils/constant";
import "react-toastify/dist/ReactToastify.css";

import { Link, json } from "react-router-dom";
import { formatDate } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { changeava, CreateNewUser } from "../features/counter/UserSlice";
import Swal from "sweetalert2";
const SignUpTuTor = () => {
  const [userInfo, setUserInfo] = useState({
    aboutmedescription: "",
    university: "",
    gender: "",
    level: "",
    phonenumber: "",
    qualifications: [
      {
        grade: "",
        subject: "",
        qualification: "",
      },
    ],
    subjects: [{ name: "", salary: "", qualification: "" }],
  });
  const [swalShown, setSwalShown] = useState(false);
  const navigate = useNavigate();
  const showSwal = () => {
    Swal.fire({
      title: "Đơn đăng kí gia sư thành công!",
      icon: "success",
      confirmButtonText: "Trở về trang chủ",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };

  const handleChangeQualification = (e, index) => {
    const { name, value } = e.target;
    const updatedQualifications = [...userInfo.qualifications];
    updatedQualifications[index] = {
      ...updatedQualifications[index],
      [name]: value,
    };
    setUserInfo({
      ...userInfo,
      qualifications: updatedQualifications,
    });
  };
  const handleChangeSubject = (e, index) => {
    const { name, value } = e.target;
    const updatedSubject = [...userInfo.subjects];
    updatedSubject[index] = {
      ...updatedSubject[index],
      [name]: value,
    };
    setUserInfo({
      ...userInfo,
      subjects: updatedSubject,
    });
  };
  console.log(userInfo);
  const [isLoading, ChangeLoading] = useState(false);
  const [Numofqualification, ChangeNumQa] = useState(1);

  const [Numoflesson, ChangeNumLs] = useState(1);
  const [schedule, setSchedule] = useState([
    { day: "T2", morning: false, afternoon: false, night: false },
    { day: "T3", morning: false, afternoon: false, night: false },
    { day: "T4", morning: false, afternoon: false, night: false },
    { day: "T5", morning: false, afternoon: false, night: false },
    { day: "T6", morning: false, afternoon: false, night: false },
    { day: "T7", morning: false, afternoon: false, night: false },
    { day: "CN", morning: false, afternoon: false, night: false },
  ]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const onSubmit = () => {};

  const handleCheckboxChange = (dayIndex, period) => {
    setSchedule((prevSchedule) => {
      const updatedSchedule = [...prevSchedule];
      updatedSchedule[dayIndex] = {
        ...updatedSchedule[dayIndex],
        [period]: !updatedSchedule[dayIndex][period],
      };
      return updatedSchedule;
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  console.log(userInfo);
  const onSubmitChangeHandler = async (e) => {
    e.preventDefault();
    const data = {
      ...userInfo,
      general: schedule,
    };
    console.log(JSON.stringify(data));
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/tutors/create",
        {
          method: "POST",
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
        const data = await response.json();
        showSwal();
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
    <section className="mx-auto lg:container">
      <ToastContainer autoClose={2000}></ToastContainer>
      <div className=" bg-white py-10 px-5 w-5/6 mx-auto">
        <div className="flex  space-x-20 items-start w-ful p-10">
          <div className=" flex flex-col space-y-10 w-full">
            <form
              className="flex flex-col space-y-5 w-full"
              onSubmit={onSubmitChangeHandler}
            >
              <div className=" flex space-x-10">
                <div className="flex flex-col space-y-5 w-1/2">
                  <h2 className=" font-bold text-2xl flex ">
                    Thông tin cá nhân
                  </h2>
                  <div className="flex flex-col  space-y-1">
                    <label
                      for="university"
                      className=" text-opacity-80 text-sm text-gray-700"
                    >
                      Trường học
                    </label>
                    <input
                      type="text"
                      id="university"
                      name="university"
                      className="  outline outline-gray-300 outline-1 px-4 py-2 rounded-sm hover:outline-primary"
                      placeholder="Nhập trường đại học"
                      value={userInfo.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col  space-y-1">
                    <label
                      for="fname"
                      className=" text-opacity-80 text-sm text-gray-700"
                    >
                      Giới thiệu
                    </label>
                    <textarea
                      type="date"
                      id="aboutmedescription"
                      name="aboutmedescription"
                      rows="4"
                      cols="50"
                      className="  outline outline-gray-300 outline-1 px-4 py-2 rounded-sm hover:outline-primary"
                      placeholder="Giới thiệu bản thân"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col  space-y-1">
                    <label
                      for="fname"
                      className=" text-opacity-80 text-sm text-gray-700"
                    >
                      Giới tính (Nam, nữ):
                    </label>
                    <select
                      name="gender"
                      id="gender"
                      className=" outline outline-gray-300 outline-1 pr-2 py-2 rounded-sm hover:outline-primary"
                      onChange={handleChange}
                    >
                      <option
                        value=""
                        className=" text-gray-700 text-sm"
                      ></option>
                      <option value="male">Nam</option>
                      <option value="female">Nữ</option>
                    </select>
                  </div>
                  <div className="flex flex-col  space-y-1">
                    <label
                      for="fname"
                      className=" text-opacity-80 text-sm text-gray-700"
                    >
                      Trình độ:
                    </label>
                    <select
                      name="level"
                      id="level"
                      className=" outline outline-gray-300 outline-1 pr-2 py-2 rounded-sm hover:outline-primary"
                      onChange={handleChange}
                    >
                      <option
                        value=""
                        className=" text-gray-700 text-sm"
                      ></option>
                      <option value="Cấp 3">Cấp 3</option>
                      <option value="Đại học">Đại học</option>
                      <option value="Thạc sĩ">Thạc sĩ</option>
                      <option value="Tiến sĩ">Tiến sĩ</option>
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
                      value={userInfo.phonenumber}
                    />
                  </div>
                  <h2 className=" text-2xl font-bold py-5 pt-14">
                    Môn học giảng dạy
                  </h2>
                  {userInfo.subjects.map((subject, index) => (
                    <div key={index} className="flex space-x-2">
                      <select
                        name="name"
                        className="w-1/3 text-gray-500 outline outline-gray-300 outline-1 pr-2 py-2 rounded-sm hover:outline-primary"
                        onChange={(e) => handleChangeSubject(e, index)}
                        value={subject?.name || ""}
                        required
                      >
                        <option value="" className="text-gray-700 text-sm">
                          Môn dạy
                        </option>
                        <option
                          value="Toán Học"
                          className="text-slate-400 text-sm"
                        >
                          Toán Học
                        </option>
                        <option
                          value="Ngữ Văn"
                          className="text-slate-400 text-sm"
                        >
                          Ngữ Văn
                        </option>
                        <option
                          value="Tiếng Anh"
                          className="text-slate-400 text-sm"
                        >
                          Tiếng Anh
                        </option>
                        <option
                          value="Tiếng Pháp"
                          className="text-slate-400 text-sm"
                        >
                          Tiếng Pháp
                        </option>
                        <option
                          value="Tiếng Pháp"
                          className="text-slate-400 text-sm"
                        >
                          Tiếng Pháp
                        </option>
                        <option
                          value="Địa Lý"
                          className="text-slate-400 text-sm"
                        >
                          Địa Lý
                        </option>
                        <option
                          value="Tin Học"
                          className="text-slate-400 text-sm"
                        >
                          Tin Học
                        </option>
                        <option
                          value="Vật Lý"
                          className="text-slate-400 text-sm"
                        >
                          Vật Lý
                        </option>
                        <option
                          value="Sinh Học"
                          className="text-slate-400 text-sm"
                        >
                          Sinh Học
                        </option>
                      </select>
                      <select
                        name="qualification"
                        className="w-1/3 text-gray-500 outline outline-gray-300 outline-1 pr-2 py-2 rounded-sm hover:outline-primary"
                        onChange={(e) => handleChangeSubject(e, index)}
                        value={subject?.qualification || ""}
                        required
                      >
                        <option value="" className="text-gray-700 text-sm">
                          Trình độ
                        </option>
                        <option
                          value="Đại học"
                          className="text-slate-400 text-sm"
                        >
                          Đại học
                        </option>
                        <option
                          value="Tiến sĩ"
                          className="text-slate-400 text-sm"
                        >
                          Tiến sĩ
                        </option>
                        <option
                          value="Thạc sĩ"
                          className="text-slate-400 text-sm"
                        >
                          Thạc sĩ
                        </option>
                        <option value="THPT" className="text-slate-400 text-sm">
                          Cấp 3
                        </option>
                      </select>
                      <input
                        required
                        name="salary"
                        className="text-gray-500 w-1/3 outline outline-gray-300 outline-1 pr-2 py-2 rounded-sm hover:outline-primary"
                        onChange={(e) => handleChangeSubject(e, index)}
                        value={subject?.salary || ""}
                        placeholder=" Tiền lương"
                      ></input>
                    </div>
                  ))}
                  <div className=" flex mx-auto ">
                    <button
                      className=" mx-auto px-4 py-2"
                      type="button"
                      onClick={() => {
                        let temsubjects = [...userInfo.subjects];
                        temsubjects.push({
                          name: "",
                          salary: "",
                          qualification: "",
                        });
                        setUserInfo({
                          ...userInfo,
                          subjects: temsubjects,
                        });
                      }}
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
                          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>
                    <button
                      className={
                        userInfo.subjects.length <= 1
                          ? "hidden"
                          : " mx-auto px-4 py-2"
                      }
                      type="button"
                      onClick={() => {
                        let temsubjects = [...userInfo.subjects];
                        if (userInfo.subjects.length > 1) temsubjects.pop();
                        setUserInfo({
                          ...userInfo,
                          subjects: temsubjects,
                        });
                      }}
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
                          d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>{" "}
                  </div>
                </div>
                <div className="flex flex-col space-y-5 w-2/3">
                  <h2 className=" font-bold text-2xl flex pb-6 ">Lịch trống</h2>
                  <table className="w-full border border-gray-200">
                    <thead className="  text-base font-medium">
                      <tr>
                        <th className=" px-6 py-3 border border-gray-200 text-center w-1/4">
                          Ngày
                        </th>
                        <th className=" px-6 py-3 border border-gray-200 text-center">
                          <div className="flex justify-center items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="23"
                              viewBox="0 0 25 23"
                            >
                              <g fill="none" fill-rule="nonzero">
                                <path
                                  fill="#637381"
                                  d="M12.998 3.058a.5.5 0 1 1-1 0V.56a.5.5 0 1 1 1 0v2.497zm5.343 2.308a.5.5 0 1 1-.766-.643l1.604-1.912a.5.5 0 1 1 .766.643l-1.604 1.912zm2.609 5.203a.5.5 0 1 1-.174-.985l2.459-.433a.5.5 0 1 1 .173.985l-2.458.433zM4.22 9.584a.5.5 0 1 1-.174.985l-2.459-.433a.5.5 0 1 1 .174-.985l2.458.433zm3.2-4.86a.5.5 0 1 1-.765.642L5.05 3.454a.5.5 0 1 1 .766-.643L7.42 4.723zM12.487 19.026l-3.182 3.182a.5.5 0 1 1-.707-.707l3.182-3.182a1 1 0 0 1 1.414 0l3.182 3.182a.5.5 0 1 1-.707.707l-3.182-3.182z"
                                />
                                <path
                                  fill="#637381"
                                  d="M.5 15.04a.5.5 0 0 1 0-1h5.988a6.5 6.5 0 1 1 12.02 0H24.5a.5.5 0 1 1 0 1H.5z"
                                />
                                <path
                                  fill="#FAC219"
                                  d="M7.587 14.04h9.821a5.5 5.5 0 1 0-9.82 0z"
                                />
                              </g>
                            </svg>
                          </div>
                        </th>
                        <th className="px-6 py-3 border border-gray-200 text-center">
                          <div className=" flex justify-center items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  fill="#637381"
                                  fill-rule="nonzero"
                                  d="M12.498 18.993a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"
                                />
                                <path
                                  fill="#FAC219"
                                  fill-rule="nonzero"
                                  d="M12.498 17.993a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
                                />
                                <path
                                  fill="#637381"
                                  fill-rule="nonzero"
                                  d="M12.998 3.991a.5.5 0 1 1-1 0V.494a.5.5 0 1 1 1 0v3.497zm5.865 2.844a.5.5 0 1 1-.707-.707l2.472-2.473a.5.5 0 1 1 .707.707l-2.472 2.473zm2.136 6.158a.5.5 0 1 1 0-1h3.497a.5.5 0 1 1 0 1h-3.497zm-2.843 5.865a.5.5 0 1 1 .707-.707l2.472 2.472a.5.5 0 1 1-.707.707l-2.472-2.472zm-6.158 2.136a.5.5 0 1 1 1 0v3.497a.5.5 0 1 1-1 0v-3.497zm-5.865-2.843a.5.5 0 1 1 .707.707L4.367 21.33a.5.5 0 1 1-.707-.707l2.473-2.472zm-2.137-6.158a.5.5 0 1 1 0 1H.499a.5.5 0 1 1 0-1h3.497zM6.84 6.128a.5.5 0 1 1-.707.707L3.66 4.362a.5.5 0 1 1 .707-.707L6.84 6.128z"
                                />
                              </g>
                            </svg>
                          </div>
                        </th>
                        <th className=" px-6 py-3 border border-gray-200 text-center">
                          <div className=" flex justify-center items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="14"
                              viewBox="0 0 25 14"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <g fill-rule="nonzero">
                                  <path
                                    fill="#637381"
                                    d="M.5 10a.5.5 0 0 1 0-1h5.988a6.5 6.5 0 1 1 12.02 0H24.5a.5.5 0 1 1 0 1H.5z"
                                  />
                                  <path
                                    fill="#FAC219"
                                    d="M7.587 9h9.821a5.5 5.5 0 1 0-9.82 0z"
                                  />
                                </g>
                                <rect
                                  width="19"
                                  height="1"
                                  x="3"
                                  y="12.027"
                                  fill="#637381"
                                  rx=".5"
                                />
                              </g>
                            </svg>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {schedule.map((item, index) => (
                        <tr key={index}>
                          <td className="px-3 py-3 border text-sm  font-bold border-gray-200 text-center w-1/4">
                            {item.day}
                          </td>
                          <td className=" px-3 py-3 border text-sm  font-bold border-gray-200 text-start w-1/4 ">
                            <div className=" flex justify-center items-center">
                              <input
                                type="checkbox"
                                className=" w-4 h-4 rounded-lg"
                                checked={item.morning}
                                onChange={() =>
                                  handleCheckboxChange(index, "morning")
                                }
                              />
                            </div>
                          </td>
                          <td className="px-3 py-3 border text-sm  font-bold border-gray-200 text-start w-1/4 ">
                            <div className=" flex justify-center items-center">
                              <input
                                type="checkbox"
                                className=" w-4 h-4 rounded-lg"
                                checked={item.afternoon}
                                onChange={() =>
                                  handleCheckboxChange(index, "afternoon")
                                }
                              />
                            </div>
                          </td>
                          <td className="px-3 py-3 border text-sm  font-bold border-gray-200 text-start w-1/4  ">
                            <div className=" flex justify-center items-center">
                              <input
                                type="checkbox"
                                className=" w-4 h-4 rounded-lg"
                                checked={item.night}
                                onChange={() =>
                                  handleCheckboxChange(index, "night")
                                }
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h2 className=" text-2xl font-bold pb-6 pt-32">
                    Chứng chỉ, bằng cấp
                  </h2>

                  {userInfo.qualifications.map((qualification, index) => (
                    <div key={index} className="flex space-x-2">
                      <input
                        type="text"
                        name="subject"
                        className="w-1/2 outline outline-gray-300 outline-1 px-4 py-2 rounded-sm hover:outline-primary"
                        placeholder="Môn học"
                        onChange={(e) => handleChangeQualification(e, index)}
                        value={qualification?.subject || ""}
                        required
                      />
                      <select
                        name="qualification"
                        className="w-1/3 text-gray-500 outline outline-gray-300 outline-1 pr-2 py-2 rounded-sm hover:outline-primary"
                        onChange={(e) => handleChangeQualification(e, index)}
                        value={qualification?.qualification || ""}
                        required
                      >
                        <option value="" className="text-gray-700 text-sm">
                          Trình độ
                        </option>
                        <option
                          value="university"
                          className="text-slate-400 text-sm"
                        >
                          Đại học
                        </option>
                        <option value="phd" className="text-slate-400 text-sm">
                          Tiến sĩ
                        </option>
                        <option
                          value="master"
                          className="text-slate-400 text-sm"
                        >
                          Thạc sĩ
                        </option>
                        <option
                          value="highschool"
                          className="text-slate-400 text-sm"
                        >
                          Cấp 3
                        </option>
                      </select>
                      <select
                        name="grade"
                        className="text-gray-500 w-1/3 outline outline-gray-300 outline-1 pr-2 py-2 rounded-sm hover:outline-primary"
                        onChange={(e) => handleChangeQualification(e, index)}
                        value={qualification?.grade || ""}
                        required
                      >
                        <option value="" className="text-slate-400 text-sm">
                          Xếp loại
                        </option>
                        <option value="excellent" className="text-gray-700">
                          Xuất xắc
                        </option>
                        <option value="good" className="text-gray-700">
                          Giỏi
                        </option>
                        <option value="average" className="text-gray-700">
                          Khá
                        </option>
                      </select>
                    </div>
                  ))}
                  <div className=" flex mx-auto ">
                    <button
                      className=" mx-auto px-4 py-2"
                      type="button"
                      onClick={() => {
                        let tempqualification = [...userInfo.qualifications];
                        tempqualification.push({
                          grade: "",
                          subject: "",
                          qualification: "",
                        });
                        setUserInfo({
                          ...userInfo,
                          qualifications: tempqualification,
                        });
                      }}
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
                          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>
                    <button
                      className={
                        userInfo.qualifications.length <= 1
                          ? "hidden"
                          : " mx-auto px-4 py-2"
                      }
                      type="button"
                      onClick={() => {
                        let tempqualification = [...userInfo.qualifications];
                        if (userInfo.qualifications.length > 1)
                          tempqualification.pop();
                        setUserInfo({
                          ...userInfo,
                          qualifications: tempqualification,
                        });
                      }}
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
                          d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>{" "}
                  </div>
                </div>
              </div>
              <button className=" mt-60 rounded-lg bg-primary mx-auto px-6 py-4 r font-bold text-opacity-70  hover:bg-lime-600 hover:text-white">
                Thay đổi
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUpTuTor;
