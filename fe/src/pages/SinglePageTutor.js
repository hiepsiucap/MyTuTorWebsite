/** @format */
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { formatPrice } from "../utils/helpers";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { baseUrl, getRequest, postRequest } from "../utils/services";
import {
  getUserChats,
  CreateAChat,
  ChangeError,
} from "../features/counter/ChatSlice";
import { CreateMessageChat } from "../features/counter//MesseageSlice";
import Swal from "sweetalert2";
const SinglePageTutor = () => {
  const name = useSelector((state) => state.user.name);
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleTutor, changesingleTutor] = useState([]);
  const [messeage, ChangeMesseage] = useState(`tôi là ${name}
  Xin chào ${singleTutor.name}, tôi đang tìm một gia sư. Bạn có sẵn sàng cho một cuộc họp miễn phí không? Tôi muốn tìm hiểu thêm về cách bạn làm việc. Tôi đang mong chờ câu trả lời của bạn!`);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (singleTutor.user) {
      console.log(singleTutor.user);
      const response = await postRequest(`${baseUrl}/chats`, {
        secondid: singleTutor.user,
      });
      if (response._id) {
        const result = await postRequest(`${baseUrl}/messages`, {
          chatId: response._id,
          text: messeage,
        });
        if (result.error) {
          Swal.fire({
            title: "Gửi tin nhắn thất bại",
            icon: "fail",
            confirmButtonText: "Trở lại",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate(`/tutors/${id}`);
            }
          });
          return;
        }
        Swal.fire({
          title: "Gửi tin nhắn thành công , gia sư sẽ sớm hồi đáp",
          icon: "success",
          confirmButtonText: "Trở lại",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(`/tutors/${id}`);
          }
        });
      }
      if (response.error) {
        return;
      }
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(
      `http://localhost:4000/api/v1/tutors/${id}`,
      {
        method: "GET",
        withCredntials: true,
        credentials: "include",
      },
      signal
    )
      .then((res) => res.json())
      .then((data) => {
        changesingleTutor(data.tutor);
        ChangeMesseage(
          `Tôi là ${name}, xin chào ${data.tutor.name}, tôi đang tìm một gia sư. Bạn có sẵn sàng cho một cuộc họp miễn phí không? Tôi muốn tìm hiểu thêm về cách bạn làm việc. Tôi đang mong chờ câu trả lời của bạn!`
        );
      })
      .catch((err) => {
        if (err.name === "AbortError") {
        }
      });
    return () => {
      console.log("cancelled!");
      controller.abort();
    };
  }, [id]);
  // console.log(singleTutor);
  return (
    <section className="mx-auto lg:container flex space-x-5">
      <div className="w-4/5 bg-white py-10 px-5">
        <div className="flex space-x-5">
          <img
            src={singleTutor?.ava}
            alt=""
            className=" rounded-lg w-40 h-40"
          />
          <div className="flex flex-col justify-between w-full">
            <div className=" flex flex-col space-y-2 w-full">
              <div className="flex justify-between w-full">
                <h5 className=" text-xl font-bold pt-1">{singleTutor.name}</h5>
                <h5 className=" text-xl font-bold mr-10">
                  {formatPrice(singleTutor?.minmoney)}- $
                  {formatPrice(singleTutor.maxmoney)}/ giờ
                </h5>
              </div>
              <p className=" text-sm font-medium">{singleTutor.university}</p>
            </div>
            <div className="flex space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="22"
                viewBox="0 0 18 22"
              >
                <path
                  fill="#3FB34F"
                  fill-rule="evenodd"
                  d="M9 0L0 4v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V4L9 0zM7 16l-4-4 1.41-1.41L7 13.17l6.59-6.59L15 8l-8 8z"
                />
              </svg>
              <p className=" text-gray-600 text-sm">BestTutor đã xác thực</p>
            </div>
          </div>
        </div>
        <div className=" flex space-x-5 items-start">
          <div className="flex mt-16 flex-col space-y-1 w-4/5">
            <h5 className=" text-lg font-bold mb-1">Giới thiệu</h5>
            <p className="  font-light">{singleTutor?.aboutmedescription}</p>
            <p className=" text-primary text-sm font-medium">Xem thêm</p>
          </div>

          <button className=" bg-button p-2 px-3 rounded-md flex space-x-2 translate-y-14  items-center">
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
                d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>

            <p className=" text-sm font-medium">Lưu profile</p>
          </button>
        </div>
        <div className=" bg-slate-100 flex items-start space-x-5 mt-10 p-5">
          <div className="mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                transform="translate(-4.6 -4.6)"
              >
                <path d="M0 0h43.2v43.2H0z" />
                <path
                  fill="#FFC670"
                  fill-rule="nonzero"
                  d="M32.825 6.818l-8.259-.799a.72.72 0 0 0-.792.742l.404 10.757a.72.72 0 0 0 .46.648l5.192 1.994a.814.814 0 0 0 .259.043.677.677 0 0 0 .266-.05l3.06-1.203a.72.72 0 0 0 .454-.597l.893-9.187a2.16 2.16 0 0 0-1.937-2.348z"
                />
                <path
                  fill="#FFDEAD"
                  fill-rule="nonzero"
                  d="M23.774 33.606l9.271-9.27 2.714 2.713-9.27 9.271z"
                />
                <path
                  fill="#F6716F"
                  fill-rule="nonzero"
                  d="M35.76 27.043l-2.714-2.713.881-.881a1.663 1.663 0 0 1 2.352 0l.362.361a1.663 1.663 0 0 1 0 2.352l-.881.881z"
                />
                <path
                  fill="#FFDEAD"
                  fill-rule="nonzero"
                  d="M26.489 36.324l-4.075 1.354 1.353-4.068h.007z"
                />
                <path
                  fill="#FFF6E6"
                  fill-rule="nonzero"
                  d="M29.131 11.038h-4.32a.238.238 0 0 1-.237-.238V6.48a1.678 1.678 0 0 0-1.685-1.678H9.929a2.16 2.16 0 0 0-2.16 2.16v29.276a2.16 2.16 0 0 0 2.16 2.16h7.07a.72.72 0 0 0 .677-.49l1.224-3.65L30.6 22.55a.72.72 0 0 0 .209-.51v-9.318a1.678 1.678 0 0 0-1.678-1.684z"
                />
                <path
                  fill="#FFDEAD"
                  fill-rule="nonzero"
                  d="M16.07 10.18H8.496v11.038h7.574c.927 0 1.678-.75 1.678-1.677v-7.683c0-.926-.751-1.677-1.678-1.677zM29.743 11.98a.929.929 0 0 0-.612-.222h-4.32a.958.958 0 0 1-.957-.958V6.48a.95.95 0 0 0-.281-.677l6.17 6.178z"
                />
                <rect
                  width="3.838"
                  height="3.838"
                  x="11.851"
                  y="23.004"
                  fill="#79DEB4"
                  fill-rule="nonzero"
                  rx=".382"
                />
                <rect
                  width="9.598"
                  height="9.598"
                  x="6.091"
                  y="9.562"
                  fill="#79DEB4"
                  fill-rule="nonzero"
                  rx=".958"
                />
                <path
                  fill="#3D3D63"
                  fill-rule="nonzero"
                  d="M17 36.958H9.928a.72.72 0 0 1-.72-.72V19.879h5.522c.927 0 1.678-.75 1.678-1.677v-7.683c0-.926-.751-1.677-1.678-1.677H9.21v-1.88a.72.72 0 0 1 .72-.72h12.96c.132 0 .24.106.245.238v4.32c0 .927.75 1.678 1.677 1.678h4.32a.238.238 0 0 1 .238.244v9.36a.72.72 0 0 0 1.44 0v-9.36a1.67 1.67 0 0 0-.569-1.202l-3.823-3.823 6.257.605a.72.72 0 0 1 .64.792l-.878 9.13a.72.72 0 1 0 1.433.143l.893-9.187a2.16 2.16 0 0 0-1.937-2.362l-8-.777-.72-.72a1.67 1.67 0 0 0-1.187-.49H9.958a2.16 2.16 0 0 0-2.16 2.16v1.88h-.72A1.685 1.685 0 0 0 5.4 10.547v7.654c0 .926.751 1.677 1.678 1.677h.72v16.359a2.16 2.16 0 0 0 2.16 2.16h7.07a.72.72 0 0 0 0-1.44h-.029zm7.574-29.139l3.21 3.219h-2.973a.238.238 0 0 1-.237-.238V7.82zM6.81 18.202v-7.683c0-.131.107-.237.238-.237h7.682c.131 0 .238.106.238.237v7.683a.238.238 0 0 1-.238.237H7.05a.238.238 0 0 1-.238-.237z"
                />
                <path
                  fill="#3D3D63"
                  fill-rule="nonzero"
                  d="M12.24 22.32a1.102 1.102 0 0 0-1.109 1.102v3.074a1.109 1.109 0 0 0 1.109 1.066h3.067a1.102 1.102 0 0 0 1.102-1.102v-3.074a1.094 1.094 0 0 0-1.102-1.066H12.24zm2.729 3.838H12.57V23.76h2.398v2.398zM25.531 26.38a.72.72 0 0 0-.72-.72h-5.76a.72.72 0 0 0 0 1.44h5.76a.72.72 0 0 0 .72-.72zM19.051 22.745a.72.72 0 0 0 0 1.44h2.398a.72.72 0 0 0 0-1.44H19.05zM24.574 16.762a.72.72 0 0 0-.72-.72H19.05a.72.72 0 0 0 0 1.44h4.803a.72.72 0 0 0 .72-.72zM19.051 14.558h2.398a.72.72 0 0 0 0-1.44H19.05a.72.72 0 0 0 0 1.44zM12.24 12.528l-2.16 2.16-.62-.62a.72.72 0 1 0-1.014 1.023l1.123 1.123a.72.72 0 0 0 .511.216.72.72 0 0 0 .511-.216l2.65-2.642a.723.723 0 0 0-1.001-1.044zM37.13 23.328l-.367-.367a2.383 2.383 0 0 0-3.37 0L23.264 33.12a.634.634 0 0 0-.173.28l-1.36 4.04a.72.72 0 0 0 .907.907l4.075-1.339a.72.72 0 0 0 .28-.18l10.138-10.13c.93-.931.93-2.44 0-3.37zM23.551 36.54l.533-1.598L25.15 36l-1.599.54zm2.938-1.26l-1.7-1.692 6.48-6.48 1.7 1.692-6.48 6.48zm7.502-7.48l-1.699-1.693.72-.72 1.692 1.7-.713.712zm2.117-2.16l-.346.352-1.699-1.656.353-.353a.943.943 0 0 1 1.332 0l.36.36a.943.943 0 0 1 0 1.332v-.036z"
                />
              </g>
            </svg>
          </div>
          <div>
            <h5 className=" font-bold ">Phỏng vấn với riêng bởi BestTutor</h5>
            <p className=" text-sm leading-relaxed">
              Chúng tôi chỉ nhận đơn đăng ký dạy kèm từ các ứng viên đang theo
              học tại các trường đại học hàng đầu Vương quốc Anh. Những ứng viên
              đáp ứng tiêu chí chấm điểm của chúng tôi sẽ chuyển sang giai đoạn
              phỏng vấn, nơi một thành viên của nhóm MyTutor sẽ đích thân đánh
              giá họ về kiến ​​thức môn học, kỹ năng giao tiếp và phương pháp
              dạy kèm chung.
            </p>
          </div>
        </div>
        <div className=" bg-slate-100 flex items-start space-x-5 mt-3 w-1/3 p-3 justify-start">
          <div className=" flex  justify-start space-x-3 items-center font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
            >
              <g fill="none" fill-rule="evenodd">
                <circle cx="17" cy="17" r="17" fill="#4CB337" />
                <g fill="#FFF">
                  <path d="M18.123 6.924l-.657 2.066.005.006c.059.046.112.099.157.159l.006.005 1.632-.517v2.408l-1.635-.857-.004.003a.845.845 0 0 1-.168.167l.938 2.832.003.01.002.003a1.523 1.523 0 0 1-1.234 1.953l-.033.006a1.394 1.394 0 0 1-.384 0l-.031-.006a1.524 1.524 0 0 1-1.235-1.953l.001-.003c0-.004.002-.007.004-.01l.938-2.832a.862.862 0 0 1-.169-.167l-.004-.003-1.634.857V8.643l1.633.517.004-.005a.83.83 0 0 1 .158-.16l.005-.005-.657-2.066h2.359zM24.002 10.02c.501.008.978.312 1.182.806a1.285 1.285 0 0 1-.695 1.677 1.29 1.29 0 1 1-.487-2.482zM9.874 10.02a1.294 1.294 0 0 1 1.204 1.785 1.292 1.292 0 0 1-1.69.698 1.285 1.285 0 0 1-.696-1.677c.204-.494.68-.798 1.182-.805zM20.736 11.052c.5.008.978.311 1.182.805a1.29 1.29 0 1 1-1.182-.805zM13.14 11.052c.167-.002.337.027.5.094.664.273.977 1.036.705 1.691a1.292 1.292 0 0 1-1.691.696 1.284 1.284 0 0 1-.695-1.676c.203-.494.68-.797 1.181-.805zM26.93 11.736c.5.008.978.311 1.181.805.271.654-.042 1.41-.695 1.677a1.292 1.292 0 1 1-.486-2.482zM6.948 11.736A1.294 1.294 0 0 1 8.15 13.52a1.291 1.291 0 0 1-1.69.697 1.286 1.286 0 0 1-.696-1.677 1.306 1.306 0 0 1 1.183-.805zM27.786 14.99c.501.008.978.31 1.182.805a1.285 1.285 0 0 1-.695 1.677 1.291 1.291 0 1 1-.487-2.483zM6.09 14.99a1.294 1.294 0 0 1 1.204 1.786 1.29 1.29 0 0 1-1.69.696 1.284 1.284 0 0 1-.695-1.677c.203-.494.68-.797 1.181-.806zM23.116 15.333c1.066 1.416.914 2.586-.405 3.902.86-.475 2.194.025 1.407 1.63-.411-.998-1.293-.773-1.477.085-.124.606.244 1.32 1.045 1.467.656.121 1.668-.329 2.48-2.075-.458.011-.856.242-1.375.6l.852-2.837c.215.797.488 1.317.779 1.6.195-.573.167-.988-.007-1.88l1.757.625c-.933 1.274-1.837 3.063-2.58 6.185-2.615-.374-5.55-.585-8.652-.585-3.101 0-6.038.21-8.654.586-.743-3.123-1.647-4.912-2.581-6.186l1.757-.626c-.174.893-.202 1.308-.006 1.881.29-.283.565-.803.78-1.6l.85 2.836c-.517-.357-.918-.588-1.375-.599.81 1.746 1.824 2.196 2.48 2.075.801-.147 1.17-.86 1.045-1.467-.184-.858-1.065-1.083-1.477-.084-.786-1.606.548-2.106 1.408-1.63-1.32-1.317-1.471-2.487-.406-3.903 1.485 1.135 1.502 2.258.834 3.839.867-.992 2.216-.46 1.729 1.142-.625-.967-1.454-.358-1.324.561.11.802 1.167 1.448 2.485 1.334 1.887-.172 2-1.473 2.047-2.552-.464-.085-1.3.344-2.012 1.345l-.262-3.008c.775.808 1.479.961 2.261.986-.26-.813-1.458-2.143-1.458-2.143h3.755s-1.197 1.33-1.458 2.143c.783-.025 1.487-.178 2.262-.986l-.263 3.008c-.713-1-1.547-1.43-2.011-1.345.046 1.079.16 2.38 2.047 2.552 1.317.114 2.374-.532 2.483-1.334.13-.919-.697-1.528-1.322-.56-.487-1.603.863-2.135 1.729-1.143-.668-1.581-.651-2.704.834-3.84z" />
                </g>
              </g>
            </svg>
            <div>
              <p>Kiểm tra nâng cao DBS</p>
              <p className=" text-sm text-gray-700"></p>
            </div>
          </div>
        </div>
        <div className=" mt-8">
          <h5 className=" text-lg font-bold">Đánh giá & nhận xét</h5>
          <div className=" border border-gray-100 mt-2"></div>
        </div>
        <div className=" mt-8">
          <h5 className=" text-lg font-bold mb-3">Bằng cấp và chứng nhận</h5>

          <div class="relative overflow-x-auto">
            <table class="w-full border border-gray-200">
              <thead class=" text-base font-medium">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 border border-gray-200 text-start w-1/3"
                  >
                    Môn Học
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 border border-gray-200 text-start w-1/3"
                  >
                    Chứng chỉ
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 border border-gray-200 text-start w-1/3"
                  >
                    Lớp
                  </th>
                </tr>
              </thead>
              <tbody>
                {singleTutor.qualifications &&
                  singleTutor.qualifications.map((ql) => {
                    return (
                      <tr class="bg-white border-b ">
                        <th
                          scope="row"
                          class="px-6 py-3 border text-sm  font-normal border-gray-200 text-start w-1/3 "
                        >
                          {ql.subject}
                        </th>
                        <td class="px-6 py-3 border text-sm font-normal border-gray-200 text-start w-1/3 ">
                          {ql.qualification}
                        </td>
                        <td class="px-6 py-3 border text-sm font-normal border-gray-200 text-start w-1/3 ">
                          {ql.grade}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className=" mt-8">
          <h5 className=" text-lg font-bold mb-3">Lịch trống</h5>
          <div class="relative overflow-x-auto">
            <table class="w-full border border-gray-200">
              <thead class=" text-base font-medium">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 border border-gray-200 text-center w-1/4"
                  ></th>
                  <th
                    scope="col"
                    class="px-6 py-3 border border-gray-200 text-center"
                  >
                    T2
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 border border-gray-200 text-center"
                  >
                    T3
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 border border-gray-200 text-center"
                  >
                    T4
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 border border-gray-200 text-center "
                  >
                    T5
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 border border-gray-200 text-center "
                  >
                    T6
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 border border-gray-200 text-center "
                  >
                    T7
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 border border-gray-200 text-center "
                  >
                    CN
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="px-3 py-3 border text-sm  font-bold border-gray-200 text-start w-1/3 "
                  >
                    <div className=" flex space-x-2">
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
                      <p className=" leading-relaxed">Buổi sáng (Trước 12h)</p>
                    </div>
                  </th>
                  {singleTutor?.general &&
                    singleTutor?.general.map((q) => {
                      return (
                        <td
                          class={
                            q
                              ? "px-6 py-3 border text-sm font-normal border-gray-200 "
                              : "border bg-slate-100"
                          }
                        >
                          <div className=" flex items-center justify-center">
                            {q.morning ? (
                              <svg
                                width="17px"
                                height="13px"
                                viewBox="0 0 17 13"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <title>Path</title>
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g
                                  id="Page-1"
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    id="Tutor-profile-UI-Update-Extra-large-≥1200px"
                                    transform="translate(-436.000000, -2942.000000)"
                                    fill="#54CA63"
                                  >
                                    <polygon
                                      id="Path"
                                      points="442.071429 2955 436 2948.762 437.712143 2946.9904 442.071429 2951.46929 451.287857 2942 453 2943.77159"
                                    ></polygon>
                                  </g>
                                </g>
                              </svg>
                            ) : (
                              ""
                            )}
                          </div>
                        </td>
                      );
                    })}
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="px-3 py-3 border text-sm  font-bold border-gray-200 text-start w-1/3 "
                  >
                    <div className=" flex space-x-2">
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
                      <p className=" leading-relaxed">
                        Buổi Chiều (Từ 12h-17h)
                      </p>
                    </div>
                  </th>
                  {singleTutor?.general &&
                    singleTutor?.general.map((q) => {
                      return (
                        <td
                          class={
                            q.afternoon
                              ? "px-6 py-3 border text-sm font-normal border-gray-200 "
                              : "border bg-slate-100"
                          }
                        >
                          <div className=" flex items-center justify-center">
                            {q.afternoon ? (
                              <svg
                                width="17px"
                                height="13px"
                                viewBox="0 0 17 13"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <title>Path</title>
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g
                                  id="Page-1"
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    id="Tutor-profile-UI-Update-Extra-large-≥1200px"
                                    transform="translate(-436.000000, -2942.000000)"
                                    fill="#54CA63"
                                  >
                                    <polygon
                                      id="Path"
                                      points="442.071429 2955 436 2948.762 437.712143 2946.9904 442.071429 2951.46929 451.287857 2942 453 2943.77159"
                                    ></polygon>
                                  </g>
                                </g>
                              </svg>
                            ) : (
                              ""
                            )}
                          </div>
                        </td>
                      );
                    })}
                </tr>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="px-3 py-3 border text-sm  font-bold border-gray-200 text-start w-1/3 "
                  >
                    <div className=" flex space-x-2">
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

                      <p className=" leading-relaxed">Buổi Tối (Sau 6h)</p>
                    </div>
                  </th>
                  {singleTutor?.general &&
                    singleTutor?.general.map((q) => {
                      return (
                        <td
                          class={
                            q.night
                              ? "px-6 py-3 border text-sm font-normal border-gray-200 "
                              : "border bg-slate-100"
                          }
                        >
                          <div className=" flex items-center justify-center">
                            {q.night ? (
                              <svg
                                width="17px"
                                height="13px"
                                viewBox="0 0 17 13"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <title>Path</title>
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g
                                  id="Page-1"
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    id="Tutor-profile-UI-Update-Extra-large-≥1200px"
                                    transform="translate(-436.000000, -2942.000000)"
                                    fill="#54CA63"
                                  >
                                    <polygon
                                      id="Path"
                                      points="442.071429 2955 436 2948.762 437.712143 2946.9904 442.071429 2951.46929 451.287857 2942 453 2943.77159"
                                    ></polygon>
                                  </g>
                                </g>
                              </svg>
                            ) : (
                              ""
                            )}
                          </div>
                        </td>
                      );
                    })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" mt-8">
          <h5 className=" text-lg font-bold mb-3">Học phí theo giờ</h5>

          <div class="relative overflow-x-auto">
            <table class="w-full border border-gray-200">
              <thead class=" text-base font-medium">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 border border-gray-200 text-start w-1/3"
                  >
                    Môn Học
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 border border-gray-200 text-start w-1/3"
                  >
                    Chứng chỉ
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 border border-gray-200 text-start w-1/3"
                  >
                    Học phí
                  </th>
                </tr>
              </thead>
              <tbody>
                {singleTutor?.subjects &&
                  singleTutor?.subjects.map((sj) => {
                    return (
                      <tr class="bg-white border-b ">
                        <th
                          scope="row"
                          class="px-6 py-3 border text-sm  font-normal border-gray-200 text-start w-1/3 "
                        >
                          {sj.name}
                        </th>
                        <td class="px-6 py-3 border text-sm font-normal border-gray-200 text-start w-1/3 ">
                          {sj.qualification}
                        </td>
                        <td class="px-6 py-3 border text-sm font-normal border-gray-200 text-start w-1/3 ">
                          {formatPrice(sj.salary)}/1 giờ
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-1/3 bg-white p-5">
        <h2 className=" font-bold text-2xl mt-10 text-center">Liên hệ</h2>

        <form
          className="flex justify-center flex-col space-y-10 mt-10"
          onSubmit={onSubmitHandler}
        >
          <div className=" flex space-x-2 items-center bg-yellow-400 p-1 py-2 rounded-md">
            <div>
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
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
            </div>
            <p className=" font-bold text-sm">
              Một cuộc họp miễn phí là bước tiếp theo tuyệt vời. Chỉ cần hỏi{" "}
              {singleTutor.name} bên dưới!
            </p>
          </div>
          <textarea
            type="text"
            id="messeage"
            name="messeage"
            rows="8"
            cols="40"
            className=" text-sm py-5 px-5 mt-24  outline outline-gray-300 outline-1 rounded-sm hover:outline-primary"
            placeholder="Giới thiệu bản thân"
            value={messeage}
            onChange={ChangeMesseage}
          />
          <button className=" bg-primary px-4 py-2 font-bold ">
            Gửi tin nhắn{" "}
          </button>
        </form>
      </div>
    </section>
  );
};
export default SinglePageTutor;
