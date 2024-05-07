/** @format */
import donut from "../assets/bg-donut-topright-primary5.svg fill.svg";
import yello from "../assets/bg-triangle-topright-secondary5.svg.png";
import pink from "../assets/bg-hexagon-topleft-accent4.svg.svg";
const EachTestimonial = ({ test }) => {
  return (
    <div className="w-1/3 flex flex-col items-center space-y-8 pt-32 pb-12 px-10 bg-primary2 rounded-md shadow-md grow relative z-10">
      <img src={test.icon} alt="" className=" w-20 h-20 rounded-full mt-5" />
      {test.id % 3 === 0 && (
        <img
          src={donut}
          alt=""
          className=" absolute right-0 -top-8 m-0 -z-10"
        />
      )}
      {test.id % 3 === 1 && (
        <img src={pink} alt="" className=" absolute left-0 -top-8 m-0 -z-10" />
      )}
      {test.id % 3 === 2 && (
        <img
          src={yello}
          alt=""
          className=" absolute right-0 -top-8 m-0 -z-10"
        />
      )}
      <div className="flex items-center flex-col ">
        <h2 className="font-bold text-2xl">{test.name}</h2>
        <p className=" text-center font-bold m-0">{test.title}</p>
        <p className=" mt-8 font-medium text-justify">{test.comment}</p>
      </div>
    </div>
  );
};
export default EachTestimonial;
