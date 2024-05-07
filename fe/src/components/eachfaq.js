/** @format */
import { useEffect, useState } from "react";
const Eachfag = ({ f }) => {
  const [open, openChange] = useState(false);
  useEffect(() => {
    if (f.id === 1) openChange(true);
  }, []);
  return (
    <div>
      <div className=" flex justify-between items-center">
        <h2
          onClick={() => {
            openChange((prev) => !prev);
          }}
          className={
            open
              ? " text-2xl font-bold text-primary cursor-pointer"
              : " text-2xl font-bold hover:text-primary cursor-pointer"
          }
        >
          {f.title}
        </h2>
        <div
          id={f.id}
          onClick={() => {
            openChange((prev) => !prev);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className={
              open
                ? "rotate-180 fill-primary w-6 h-6 cursor-pointer"
                : "w-6 h-6 cursor-pointer"
            }
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
      </div>
      <p className={open ? "py-10" : " hidden py-10"}>{f.description}</p>
    </div>
  );
};
export default Eachfag;
