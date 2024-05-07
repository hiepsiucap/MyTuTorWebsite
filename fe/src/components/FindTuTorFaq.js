/** @format */
import { useState } from "react";
import Eachfag from "./eachfaq";
import circle from "../assets/Mask group.svg";
import yellow from "../assets/yello.svg";
import { btfaq } from "../utils/constant";
const FTFaq = () => {
  return (
    <section className="p-10 pt-20 mt-0 overflow-hidden relative z-10">
      <img
        src={circle}
        alt=""
        className="absolute w-1/3 -right-20 -top-20 -z-10"
      />
      <img
        src={yellow}
        alt=""
        className="absolute w-1/4 -left-20 -bottom-20 -z-10"
      />
      <div className="sm:container mx-auto px-32 flex flex-col space-y-20">
        <h1 className=" text-6xl font-bold">Câu hỏi thường gặp</h1>
        <div className=" bg-white p-5  flex flex-col space-y-8  shadow-md">
          {btfaq.map((f) => {
            return <Eachfag f={f}></Eachfag>;
          })}
        </div>
      </div>
    </section>
  );
};
export default FTFaq;
