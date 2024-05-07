/** @format */
import { Link } from "react-router-dom";
const BlogCompo = ({ b }) => {
  return (
    <div className="flex flex-col space-y-3">
      <img src={b.img} alt="" className="w-96 h-64 rounded-sm shadow-sm" />
      <p className="text-sm text-gray-500">{b.type}</p>
      <h4 className=" text-xl tracking-tight font-medium">{b.title}</h4>
      <p className="text-sm">
        {b.description}...
        <Link to="/" className=" font-medium text-primary">
          {" "}
          Read More
        </Link>
      </p>
    </div>
  );
};
export default BlogCompo;
