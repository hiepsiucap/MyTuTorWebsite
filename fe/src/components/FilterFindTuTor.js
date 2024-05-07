/** @format */

import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactSlider from "react-slider";
import { formatPrice } from "../utils/helpers";
import { useSelector, useDispatch } from "react-redux";

import { filterAlist, filterthelist } from "../features/counter/TutorSlice";
const FilterTuTor = () => {
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
  const [schedule, setSchedule] = useState([
    { day: "T2", morning: false, afternoon: false, night: false },
    { day: "T3", morning: false, afternoon: false, night: false },
    { day: "T4", morning: false, afternoon: false, night: false },
    { day: "T5", morning: false, afternoon: false, night: false },
    { day: "T6", morning: false, afternoon: false, night: false },
    { day: "T7", morning: false, afternoon: false, night: false },
    { day: "CN", morning: false, afternoon: false, night: false },
  ]);
  const tutor = useSelector((state) => state.tutor);
  const [Isopen, open] = useState(false);
  const [isgeopen, opengeneral] = useState(false);
  const dispatch = useDispatch();
  const OnClickHandler = () => {
    open((prev) => {
      return !prev;
    });
  };
  const [rangeprice, setRangePrice] = useState([
    tutor.minmoney / 1000,
    tutor.maxmoney / 1000,
  ]);
  useEffect(() => {
    setRangePrice([tutor.minmoney / 1000, tutor.maxmoney / 1000]);
  }, [tutor.maxmoney, tutor.minmoney]);
  const [filtergender, setfiltergender] = useState("");
  const [filtersubject, setfiltersubject] = useState("");
  const [filterlevel, setfilterlevel] = useState("");
  console.log(filtergender);
  const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${(props) => (props.index === 1 ? "#7ED957" : null)};
    border-radius: 999px;
  `;
  useEffect(() => {
    dispatch(
      filterthelist({
        maxmoney: rangeprice[0] * 1000,
        minmoney: rangeprice[1] * 1000,
        gender: filtergender,
        subjectname: filtersubject,
        filterlevel: filterlevel,
        schedule: schedule,
      })
    );
    dispatch(filterAlist());
  }, [filtergender, filtersubject, rangeprice, filterlevel, schedule]);
  const Track = (props, state) => (
    <StyledTrack {...props} index={state.index} />
  );

  return (
    <section className=" md:container mx-auto">
      <form className=" grid grid-cols-3 gap-5 w-full">
        <div className=" flex flex-col">
          <label for="cars" className=" font-medium ml-2">
            Môn Học:
          </label>
          <select
            name="filtersubject"
            value={filtersubject}
            onChange={(e) => setfiltersubject(e.target.value)}
            id="cars"
            className="px-2 py-3 rounded-lg border font-bold border-gray-300 hover:border-primary focus:border-primary"
          >
            <option value="">Môn học</option>
            <option value="Toán Học">Toán Học</option>
            <option value="Ngữ Văn">Ngữ Văn</option>
            <option value="Tiếng Anh">Tiếng Anh</option>
            <option value="Tiếng Pháp">Tiếng Pháp</option>
            <option value="Tiếng Pháp">Địa Lý</option>
            <option value="Vật lý">Vật Lý </option>
            <option value="Sinh Học">Sinh Học</option>
          </select>
        </div>
        <div className=" flex flex-col">
          <label for="cars" className=" font-medium ml-2">
            Giới tính:
          </label>
          <select
            name="filtergender"
            id="filtergender"
            value={filtergender}
            onChange={(e) => setfiltergender(e.target.value)}
            className="px-2 py-3 rounded-lg border font-bold border-gray-300 hover:border-primary focus:border-primary"
          >
            <option value="">Giới tính</option>
            <option value="female">Nữ</option>
            <option value="male">Nam</option>
          </select>
        </div>
        <div>
          <label for="cars" className=" font-medium ml-2">
            Mức giá:
          </label>
          <div className=" flex items-center space-x-4 px-2 py-3 ">
            <p className=" font-bold text-gray-700">
              {formatPrice(rangeprice[0] * 1000)}
            </p>
            <ReactSlider
              value={rangeprice}
              className="w-full h-2 bg-gray-200 rounded-full"
              thumbClassName="bg-white border border-gray-900 h-5 w-5 cursor-pointer rounded-full -top-1.5"
              onChange={setRangePrice}
              markClassName="bg-gray-900"
              renderTrack={Track}
              min={tutor.minmoney / 1000}
              max={tutor.maxmoney / 1000}
            />
            <p className=" font-bold text-gray-700">
              {formatPrice(rangeprice[1] * 1000)}
            </p>
          </div>
        </div>
        <div
          className="flex items-center space-x-1 ml-10 translate-y-2"
          onClick={OnClickHandler}
        >
          <h5 className=" text-xl font-bold text-primary">Lọc khác</h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="#7ED957"
            className={Isopen ? "w-6 h-6 rotate-180" : "w-6 h-6"}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        {Isopen ? (
          <>
            <div className=" flex flex-col">
              <label for="cars" className=" font-medium ml-2">
                Trình độ
              </label>
              <select
                name="level"
                id="level"
                value={filterlevel}
                onChange={(e) => setfilterlevel(e.target.value)}
                className="px-2 py-3 rounded-lg font-bold border border-gray-300 hover:border-primary focus:border-primary"
              >
                <option value="">trình độ</option>
                <option value="Đại học">Đại học</option>
                <option value="Cấp 3">Cấp 3</option>
                <option value="Thạc sĩ ">Thạc sĩ </option>
                <option value="Tiến sĩ">Tiến sĩ</option>
              </select>
            </div>
            <div className=" flex flex-col relative">
              <label for="cars" className=" font-medium ml-2">
                Có sẵn
              </label>
              <button
                type="text"
                className={
                  !isgeopen
                    ? "px-2 py-3 bg-white rounded-lg font-bold border border-gray-300 hover:border-primary focus:border-primary"
                    : "px-2 py-3 bg-primary rounded-lg font-bold border border-gray-300 hover:border-primary focus:border-primary"
                }
                onClick={(e) => {
                  e.preventDefault();
                  opengeneral((prev) => !prev);
                }}
              >
                {!isgeopen ? "Chọn ngày có sẵn" : "Đóng"}
              </button>
              {isgeopen && (
                <table className=" z-50 absolute w-full border bg-white border-gray-200 top-20 -translate-y-1">
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
              )}
            </div>{" "}
          </>
        ) : null}
      </form>
    </section>
  );
};
export default FilterTuTor;
