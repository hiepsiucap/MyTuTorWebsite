/** @format */
/** @format */
import { tutor } from "../utils/constant";
import { Link, useActionData } from "react-router-dom";
import EachTuTor from "./EachTuTor";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { AddNewList } from "../features/counter/TutorSlice";
const SelectTutor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(
      "http://localhost:4000/api/v1/tutors",
      {
        method: "GET",
        withCredntials: true,
        credentials: "include",
      },
      signal
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(AddNewList(data.ListofTutor));
      })
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
  const tutor = useSelector((state) => state.tutor);
  const [page, ChangePage] = useState({
    current: 1,
    max: Math.round(tutor.filtertutor.length / 7 + 0.5),
  });
  console.log("PAGE MAX" + page.max, tutor.filtertutor.length);
  console.log(tutor);
  return (
    <div className=" md:container mx-auto pt-10 flex flex-col pb-20 space-y-5">
      <div className="flex space-y-5 flex-col">
        {tutor.filtertutor &&
          tutor.filtertutor.map((t, index) => {
            if (index < page.current * 7 && index >= (page.current - 1) * 7)
              return <EachTuTor t={t}></EachTuTor>;
          })}
      </div>
      <div className=" flex justify-center space-x-2 items-center">
        {new Array(page.max).fill(1).map((p, index) => {
          console.log(index);
          console.log("Mang thu", index);
          console.log("trang hien tai", page.current);
          return (
            <button
              id={index + 1}
              className={
                index + 1 == page.current
                  ? "bg-primary rounded-md w-8 h-8 text-sm font-bold flex justify-center border items-center shadow-sm"
                  : " rounded-md w-8 h-8 text-sm font-bold flex justify-center items-center shadow-sm border "
              }
              onClick={(e) =>
                ChangePage((prev) => {
                  return { ...prev, current: e.target.id };
                })
              }
            >
              {index + 1}
            </button>
          );
        })}
        {page.current == page.max ? (
          <button
            onClick={(e) =>
              ChangePage((prev) => {
                return { ...prev, current: prev.current++ };
              })
            }
            disabled
            className="bg-white p-3  text-primary rounded-md  text-sm font-bold flex justify-center items-center shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="#7ED957"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        ) : (
          <button
            onClick={(e) =>
              ChangePage((prev) => {
                return { ...prev, current: prev.current++ };
              })
            }
            className="bg-white p-3  text-primary rounded-md  text-sm font-bold flex justify-center items-center shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="#7ED957"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        )}
      </div>
      <h4 className=" text-lg font-bold">Những môn học được chọn nhiều</h4>
      <div className=" flex space-x-2">
        <div className=" bg-lime-200 text-base px-3 py-1 rounded-md text-gray-800">
          Gia sư toán
        </div>
        <div className=" bg-lime-200 text-base px-3 py-1 rounded-md text-gray-800">
          Gia sư tiếng anh
        </div>
        <div className=" bg-lime-200 text-base px-3 py-1 rounded-md text-gray-800">
          Gia sư vật lý
        </div>
        <div className=" bg-lime-200 text-base px-3 py-1 rounded-md text-gray-800">
          Gia sư sinh học
        </div>
        <div className=" bg-lime-200 text-base px-3 py-1 rounded-md text-gray-800">
          Gia sư ngữ văn
        </div>
      </div>
    </div>
  );
};
export default SelectTutor;
