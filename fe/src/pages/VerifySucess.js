/** @format */
import { useLoaderData } from "react-router";
import failed from "../assets/cross.png";
import successs from "../assets/checked.png";
import { Link } from "react-router-dom";

const VerifySuccess = () => {
  const data = useLoaderData();
  const success = data?.success || false;
  return (
    <>
      <h1 className=" text-5xl font-bold text-center py-10">Đăng kí</h1>
      <div className=" w-2/3 mx-auto bg-white my-10 flex py-20 shadow-lg">
        <div className=" w-1/2 border-r flex flex-col items-center justify-center">
          <img
            src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1708399491/student-mytutor-286x286_f538q4.png"
            alt=""
            className="w-1/2"
          />
          <h1 className=" text-4xl font-bold py-3">Best Tutor</h1>
          <p className=" text-lg italic">Chọn để dẫn đầu !</p>
        </div>
        {success ? (
          <div className=" w-1/2 flex flex-col text-center justify-center items-center space-y-10">
            <img src={successs} alt="" className="w-24 h-24 animate-spin" />
            <h1 className="w-2/3 text-xl font-bold">
              Xác thức thành công vui lòng đăng nhập để sử dụng
            </h1>
            <Link
              to="/login"
              className=" py-2 px-4 font-bold text-gray-800 bg-primary rounded-md"
            >
              Đăng nhập
            </Link>
          </div>
        ) : (
          <div className=" w-1/2 flex flex-col text-center justify-center items-center space-y-10">
            <img src={failed} alt="" className="w-24 h-24 animate-spin" />
            <h1 className="w-2/3 text-xl font-bold">
              Xác thực thất bại vui lòng thử lại
            </h1>
          </div>
        )}
      </div>
    </>
  );
};
const VerifyLoader = async ({ request }) => {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");
  const verifyToken = url.searchParams.get("token");
  console.log(email);
  return fetch("http://localhost:4000/api/v1/auth/verifyemail", {
    method: "POST",
    withCredntials: true,
    headers: {
      Accept: "application/form-data",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, verifyToken }),
  });
};
export { VerifyLoader };
export default VerifySuccess;
