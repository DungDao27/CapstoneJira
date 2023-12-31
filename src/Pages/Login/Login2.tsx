import React, { useRef, useEffect, useState } from "react";
// import "../../style/style.css";
import "../../style/style.css"
import { useFormik, withFormik } from "formik";
import {
    UserRegisterApi,
    loginAsyncAction,
    registerAsyncAction,
} from "../../Redux/reducers/userLoginReducer";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../Redux/configStore";
import { history } from "../..";
import * as Yup from "yup";
import "../Login/Login.css";
import { createFromIconfontCN } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
type Props = {};

export interface UserLoginFrm {
  email:string,
  passWord:string
}


const Register = (props: Props) => {
  const { userLogin } = useSelector((state: RootState) => state.userLoginReducer);
  const dispatch: DispatchType = useDispatch();
  const [isRegistered, setIsRegistered] = useState(false);
  const register = useFormik({
    initialValues: {
      email: "",
      passWord: "",
      name: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .required("Mật khẩu không được để trống")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          "Mật khẩu phải ít nhất 8 tự gồm chữ, số, và kí tự đặc biệt"
        ),

      name: Yup.string()
        .required("Tên không được để trống")
        .matches(
          /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
          "Chỉ nhập kí tự chữ"
        ),

      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Email không được để trống"),

      phoneNumber: Yup.string()
        .required("Số điện thoại không được để trống")
        .matches(
          /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/,
          "Số điện thoại chưa đúng định đạng"
        ),
    }),
    onSubmit: (values: UserRegisterApi) => {
      console.log(values);
      const action = registerAsyncAction(values);
      dispatch(action);
      setIsRegistered(true);
    },
  });

  const [classContainer, setClassContainer] = useState("container");

  const delID = () => {
    setClassContainer("container");
  };

  const login = useFormik({
    initialValues: {
      email: "",
      passWord: "",
    },
    onSubmit: (values: UserLoginFrm) => {
      const action = loginAsyncAction(values);
      dispatch(action);
    },
  });

  console.log(userLogin);
  const containerRef = useRef<HTMLDivElement>(null);
  const signInEmailRef = useRef<HTMLInputElement>(null);
  const signUpEmailRef = useRef<HTMLInputElement>(null);

  const openSignIn = () => {
    if (containerRef.current) {
      containerRef.current.classList.remove("right-panel-active");
      if (signUpEmailRef.current && signInEmailRef.current) {
        signInEmailRef.current.value = signUpEmailRef.current.value;
      }
    }
  };

  const openSignUp = () => {
    if (containerRef.current) {
      containerRef.current.classList.add("right-panel-active");
      if (signInEmailRef.current && signUpEmailRef.current) {
        signUpEmailRef.current.value = signInEmailRef.current.value;
      }
    }
  };

  return (
    <div className="register-page">
      <div
        style={{ marginTop: "120px" }}
        className="container "
        id="container"
        ref={containerRef}
      >
        <div className="form-container sign-up-container ">
          <form onSubmit={register.handleSubmit}>
            <h1>Tạo Tài Khoản</h1>
            <input
              type="email"
              id="emmail"
              name="email"
              placeholder="Email"
              ref={signUpEmailRef}
              onChange={register.handleChange}
            />
            {register.errors.email && register.touched.email ? (
              <div className="errorMessage">{register.errors.email}</div>
            ) : (
              <div className="message"></div>
            )}
            <input type="text" placeholder="Name" id="name" name="name" onChange={register.handleChange}/>
            {register.errors.name && register.touched.name ? 
            (
              <div className="errorMessage">{register.errors.name}</div>
            ) : (
              <div className="message"></div>
            )}
            <input
              type="text"
              placeholder="Phone"
              id="phoneNumber"
              name="phoneNumber"
              onChange={register.handleChange}
            />
            {register.errors.phoneNumber && register.touched.phoneNumber ? (
              <div className="errorMessage">{register.errors.phoneNumber}</div>
            ) : (
              <div className="message"></div>
            )}
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              onChange={register.handleChange}
            />
            {register.errors.passWord && register.touched.passWord ? (
              <div className="errorMessage">{register.errors.passWord}</div>
            ) : (
              <div className="message"></div>
            )}
            <button type="submit">Đăng Ký</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={login.handleSubmit}>
            <h1>Đăng Nhập</h1>
            <input
              onChange={login.handleChange}
              type="text"
              placeholder="Email"
              name="email"
              value={login.values.email}
            />
            <input
              onChange={login.handleChange}
              type="password"
              placeholder="Password"
              name="passWord"
              value={login.values.passWord}
            />
            <button type="submit">Đăng Nhập</button>

          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Chào mừng trở lại!</h1>
              <p>
                Để duy trì kết nối với chúng tôi, vui lòng đăng nhập bằng thông
                tin cá nhân của bạn
              </p>
              <button className="ghost" id="signIn" onClick={openSignIn}>
                Đăng Nhập
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Chào bạn</h1>
              <p>
                Hãy nhập thông tin cá nhân của bạn và bắt đầu cuộc hành trình
                của bạn với chúng tôi
              </p>
              <button className="ghost" id="signUp" onClick={openSignUp}>
                Đăng Ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
