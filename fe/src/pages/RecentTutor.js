/** @format */
import { useEffect, useState } from "react";
import { profile } from "../utils/constant";
import "react-toastify/dist/ReactToastify.css";

import { Link, json } from "react-router-dom";
import { formatDate } from "../utils/helpers";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { changeava, CreateNewUser } from "../features/counter/UserSlice";
import EachTuTorV2 from "../components/EachTutorV2";
import { getRequest } from "../utils/services";
const RecentTutor = () => {
  const [data, changedata] = useState([]);
  useEffect(() => {
    const FetchLikeList = async () => {
      const result = await getRequest("http://localhost:4000/api/v1/listlike");
      if (result?.error) {
        return;
      } else {
        changedata(result);
      }
    };
    FetchLikeList();
  }, []);
  console.log(data);
  return (
    <section className="mx-auto lg:container flex space-x-5">
      <ToastContainer autoClose={2000}></ToastContainer>
      <div className=" bg-white py-10 px-5 w-full rounded-md">
        <h1 className=" text-3xl font-bold pb-20  ">Danh sách yêu thích</h1>
        <div className=" grid grid-cols-4 gap-x-5 gap-y-10 w-full">
          {data.length > 0 &&
            data.map((t) => {
              return <EachTuTorV2 t={t.tutor}></EachTuTorV2>;
            })}
          {data.length === 0 && <p>Không có dữ liệu</p>}
        </div>
      </div>
    </section>
  );
};
export default RecentTutor;
