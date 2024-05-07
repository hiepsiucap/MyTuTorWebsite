/** @format */
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
const EachTuTor = ({ t }) => {
  const link = `/tutors/${t._id}`;
  return (
    <Link
      to={link}
      className="flex overflow-hidden rounded-lg bg-white w-5/6 pr-5 shadow-md"
    >
      <div className=" w-44 h-44">
        <img src={t.ava} alt="" className=" border scale-105" />
      </div>
      <div className="flex flex-col w-7/12 py-5 px-6">
        <h2 className=" text-2xl font-bold">{t.name}</h2>
        <h5 className=" text-sm font-medium">{t.university}</h5>
        <h6 className=" text-sm text-gray-700 pt-2">{t.aboutmedescription}</h6>
      </div>
      <div className=" felx flex-col border-l border-gray-200 py-5 px-6 space-y-2">
        <div className="flex space-x-1 items-end">
          <h5 className=" text-xl font-bold">
            {formatPrice(t.minmoney)}-{formatPrice(t.maxmoney)}
          </h5>
          <h5 className=" text-sm text-gray-600">/1h</h5>
        </div>
        <div className="flex space-x-1 items-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.27079 14.3746L4.37202 17.7389C4.06879 17.9471 3.65415 17.8701 3.44588 17.5669C3.3309 17.3995 3.29858 17.1889 3.3581 16.9947L5.08201 11.3711L0.349384 7.83009C0.0548552 7.60971 -0.00523983 7.19233 0.215156 6.89784C0.338096 6.73357 0.529898 6.63512 0.735052 6.631L6.68198 6.51139L8.64254 0.94495C8.76474 0.598017 9.14507 0.415818 9.49204 0.537998C9.68235 0.605011 9.83202 0.754665 9.89904 0.94495L11.8596 6.51139L17.8065 6.631C18.1743 6.63839 18.4665 6.9425 18.4591 7.31025C18.4549 7.51538 18.3565 7.70716 18.1922 7.83009L13.4596 11.3711L15.1835 16.9947C15.2913 17.3464 15.0936 17.7188 14.7419 17.8266C14.5477 17.8861 14.337 17.8538 14.1696 17.7389L9.27079 14.3746Z"
              fill="#FAC219"
            />
          </svg>
          <div className=" text-gray-600 text-sm">{t.averageRating} / 5</div>
        </div>
        <p className=" text-gray-600 text-sm">{t.numOfClass} lớp học</p>
        <p className=" text-gray-600 text-sm">{t.numOfReviews} đánh giá</p>
      </div>
    </Link>
  );
};
export default EachTuTor;
