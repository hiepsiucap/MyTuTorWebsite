/** @format */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "./logo.svg";
import { VerifyLoader } from "./pages/VerifySucess";
import { useDispatch } from "react-redux";
import {
  HomePage,
  RootLayout,
  Login,
  SignUp,
  ForgotPassWord,
  BeATutorPage,
  HowItWork,
  Blog,
  FindATutor,
  SinglePageTutor,
  VerifySuccess,
  Profile,
  ChatPage,
  SignUpTuTor,
} from "./pages";
import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero";
import { useEffect } from "react";
import RecentTutor from "./pages/RecentTutor";
import { Logout, CreateNewUser } from "./features/counter/UserSlice";

function App() {
  const dispatch = useDispatch();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>,
        },
        {
          path: "/signuptutor",
          element: <SignUpTuTor></SignUpTuTor>,
        },
        {
          path: "/findatutor",
          element: <FindATutor></FindATutor>,
        },
        {
          path: "/howitwork",
          element: <HowItWork></HowItWork>,
        },
        {
          path: "/tutors/:id",
          element: <SinglePageTutor></SinglePageTutor>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },

        {
          path: "/verify",
          element: <VerifySuccess></VerifySuccess>,
          loader: VerifyLoader,
        },
        {
          path: "/profile",
          element: <Profile></Profile>,
        },
        {
          path: "/forgotpassword",
          element: <ForgotPassWord></ForgotPassWord>,
        },
        {
          path: "/beatutor",
          element: <BeATutorPage></BeATutorPage>,
        },
        {
          path: "/recenttutor",
          element: <RecentTutor></RecentTutor>,
        },
      ],
    },
    {
      path: "/chat",
      element: <ChatPage></ChatPage>,
    },
  ]);
  useEffect(() => {
    const Checklogin = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/v1/auth/checklogin"
        );
        if (!response.ok) {
          dispatch(Logout());
        } else {
          dispatch(CreateNewUser(response?.user));
        }
      } catch (err) {
        dispatch(Logout());
      }
    };
    Checklogin();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
