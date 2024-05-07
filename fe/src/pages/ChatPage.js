/** @format */
import AnoBlog from "../components/AnoBlog";
import BeTutorHero from "../components/BeTutorHero";
import BlogFeature from "../components/BlogFeatured";
import FTFaq from "../components/FindTuTorFaq";
import HeroBlog from "../components/HeroBlog";
import { useSelector, useDispatch } from "react-redux";
import { getRequest, postRequest } from "../utils/services";
import { baseUrl } from "../utils/services";
import socketIOClient from "socket.io-client";
import {
  AddMessageChat,
  AddANewMessageChat,
} from "../features/counter/MesseageSlice";
import { fetchUserChats } from "../features/counter/ChatSlice";
import { useEffect, useRef, useState } from "react";
const host = "http://localhost:4000";
const ChatPage = () => {
  const socketRef = useRef();
  const user = useSelector((state) => state.user);
  const userChat = useSelector((state) => state.chat.userChat);
  const listofmess = useSelector((state) => state.messeage.ListMessage);
  console.log("Danh sach tin nhan" + listofmess);
  const [idchat, changeidchat] = useState("");
  const [ava, changava] = useState("");
  const [name, changename] = useState("");
  const [mess, Chmes] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserChats());
    if (userChat?.length > 1) changeidchat(userChat[0].chatid);
  }, []);
  console.log(idchat);
  useEffect(() => {
    const fetchdata = async () => {
      if (idchat) {
        const response = await getRequest(`${baseUrl}/messages/${idchat}`);
        console.log(response);
        dispatch(AddMessageChat(response));
        const chat = userChat.find((c) => c.chatid === idchat);
        if (chat) {
          changename(chat.name);
          console.log(chat);
          changava(chat.ava);
        }
      }
    };
    fetchdata();
  }, [idchat]);
  const onClickHandler = (e) => {
    changeidchat(e.target.id);
  };
  useEffect(() => {
    socketRef.current = socketIOClient.connect(host);
    socketRef.current.on("messageReceived", (dataGot) => {
      dispatch(AddANewMessageChat(dataGot));
    }); // mỗi khi có tin nhắn thì mess sẽ được render thêm

    return () => {
      socketRef.current.disconnect();
    };
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(user);
    if (mess !== null && user.id) {
      const msg = {
        chatId: idchat,
        senderId: user.id,
        text: mess,
      };
      console.log("msg" + msg);
      socketRef.current.emit("sendMessage", msg);
      Chmes("");
    }
  };
  console.log(userChat);
  return (
    <>
      <div class="flex h-screen antialiased bg-white text-gray-800 ">
        <div class="flex flex-row h-full w-full overflow-x-hidden">
          <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
            <div class="flex flex-row items-center justify-center h-12 w-full">
              <div class="flex items-center justify-center rounded-2xl text-primary bg- h-10 w-10">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </div>
              <div class="ml-2 font-bold text-2xl">Tin Nhắn</div>
            </div>
            <div class="flex flex-col items-center bg-green-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
              <div class="h-20 w-20  border rounded-full overflow-hidden">
                <img src={user.ava} alt="Avatar" class="h-full w-full" />
              </div>
              <div class="text-sm font-semibold mt-2">{user.name}</div>
              <div class="text-xs text-gray-500">{user.role}</div>
              <div class="flex flex-row items-center mt-3">
                <div class="flex flex-col justify-center h-4 w-8 bg-primary rounded-full">
                  <div class="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
                </div>
                <div class="leading-none ml-1 text-xs">Hoạt động</div>
              </div>
            </div>
            <div class="flex flex-col mt-8">
              <div class="flex flex-row items-center justify-between text-xs">
                <span class="font-bold">Trò chuyện gần đây</span>
                <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  {userChat?.length || 0}
                </span>
              </div>
              <div class="flex flex-col space-y-1 mt-4 -mx-2 h-72 overflow-y-auto">
                {userChat?.length > 0 &&
                  userChat.map((uc) => (
                    <button
                      class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                      id={uc.chatid}
                      onClick={onClickHandler}
                    >
                      <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                        <img
                          src={uc.ava}
                          alt=""
                          className=" h-8 w-8 rounded-full"
                        />
                      </div>
                      <div class="ml-2 text-sm font-semibold">{uc.name}</div>
                    </button>
                  ))}
              </div>
            </div>
          </div>
          <div class="flex flex-col flex-auto h-full p-6">
            <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              <div class="flex flex-col h-full overflow-x-auto mb-4">
                <div class="flex flex-col h-full">
                  <div class="grid grid-cols-12 gap-y-2">
                    {listofmess?.length &&
                      listofmess.map((m) => {
                        if (m.senderId !== user.id)
                          return (
                            <div class="col-start-1 col-end-8 p-3 rounded-lg">
                              <div class="flex flex-row items-center">
                                <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                  <img
                                    src={ava}
                                    alt=""
                                    className=" rounded-full h-10 w-10"
                                  />
                                </div>
                                <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                  <div>{m.text}</div>
                                </div>
                              </div>
                            </div>
                          );
                        else
                          return (
                            <div class="col-start-6 col-end-13 p-3 rounded-lg -z-1">
                              <div class="flex items-center justify-start flex-row-reverse ">
                                <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                  <img
                                    src={user.ava}
                                    alt=""
                                    className="w-10 h-10 rounded-full"
                                  />
                                </div>
                                <div class=" mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                  <div>{m.text}</div>
                                </div>
                              </div>
                            </div>
                          );
                      })}
                  </div>
                </div>
              </div>
              <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <div>
                  <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div class="flex-grow ml-4">
                  <form class="relative w-full" onSubmit={sendMessage}>
                    <input
                      type="text"
                      class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                      value={mess}
                      onChange={(e) => Chmes(e.target.value)}
                    />
                    <button class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
                <div class="ml-4">
                  <button
                    class="flex items-center justify-center bg-primary hover:bg-green-700 rounded-xl text-white px-4 py-1 flex-shrink-0"
                    onClick={sendMessage}
                  >
                    <span>Gửi</span>
                    <span class="ml-2">
                      <svg
                        class="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatPage;
