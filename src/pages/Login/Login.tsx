import React, { useRef, useEffect, useState } from 'react';
import '../../style/style.css';
import { useFormik } from 'formik';
import { UserSignIn, UserSignUp, signinActionApi, signupActionApi } from '../../redux/reducers/userReducder';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../redux/store';
import { history } from '../..';
import * as Yup from 'yup'
import '../Login/Login.css'
import { UserOutlined,FacebookOutlined,GoogleOutlined  } from '@ant-design/icons';
import {Button} from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { Space } from 'antd';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
type Props = {};

const Register = (props: Props) => {
  const { userSignIn } = useSelector((state: RootState) => state.userReducer)
  const dispatch: DispatchType = useDispatch()
  const [isRegistered, setIsRegistered] = useState(false);
  const register = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      soDT: '',
    },
    validationSchema: Yup.object().shape({
      // taiKhoan: Yup.string()
      //   .min(2, 'Tài khoản quá ít kí tự')
      //   .max(16, 'Tài khoản quá 16 kí tự')
      //   .required('Tài khoản không được để trống'),

      password: Yup.string()
        .required('Mật khẩu không được để trống')
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'Mật khẩu phải ít nhất 8 tự gồm chữ, số, và kí tự đặc biệt'),

      name: Yup.string()
        .required('Tên không được để trống')
        .matches(/^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/, 'Chỉ nhập kí tự chữ'),

      email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),

      soDT: Yup.string()
        .required('Số điện thoại không được để trống')
        .matches(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/, 'Số điện thoại chưa đúng định đạng'),
    }),
    onSubmit: (values: UserSignUp) => {
      console.log(values)
      const action = signupActionApi(values);
      dispatch(action)
      setIsRegistered(true);
    }
  })

  const [classContainer, setClassContainer] = useState('container')

  const delID = () => {
    setClassContainer('container')
}

  const login = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values: UserSignIn) => {
      const action = signinActionApi(values);
      dispatch(action)

    }

  })
  useEffect(() => {
    if (isRegistered) {

      document.querySelectorAll<HTMLInputElement>('.form-container input').forEach((input) => {
        input.value = '';
      });
    }
  }, [isRegistered, register]);

  // useEffect(() => {
  //   if (userSignIn?.maLoaiNguoiDung === 'GV') {
  //     history.push('/admin');
  //   } else if (userLogin?.maLoaiNguoiDung === 'HV') {
  //     history.push('/');
  //   }
  // }, [userLogin?.maLoaiNguoiDung]);

  console.log(userSignIn)
  const containerRef = useRef<HTMLDivElement>(null);
  const signInEmailRef = useRef<HTMLInputElement>(null);
  const signUpEmailRef = useRef<HTMLInputElement>(null);

  const openSignIn = () => {
    if (containerRef.current) {
      containerRef.current.classList.remove('right-panel-active');
      if (signUpEmailRef.current && signInEmailRef.current) {
        signInEmailRef.current.value = signUpEmailRef.current.value;
      }
    }
  };

  const openSignUp = () => {
    if (containerRef.current) {
      containerRef.current.classList.add('right-panel-active');
      if (signInEmailRef.current && signUpEmailRef.current) {
        signUpEmailRef.current.value = signInEmailRef.current.value;
      }
    }
  };

  return (
    
    <div className='register-page'>
      <div style={{ marginTop: '120px' }} className='container ' id='container' ref={containerRef}>
        <div className='form-container sign-up-container '>
          <form onSubmit={register.handleSubmit}>
            <h1>Tạo Tài Kkhoản</h1>
            <input type='email' id='emmail' name='email' placeholder='Email' ref={signUpEmailRef} onChange={register.handleChange} />
            {register.errors.email && register.touched.email ? <div className='errorMessage'>{register.errors.email}</div> : <div className='message'></div>}
            <input type='text' placeholder='Name' id='name' name='name' onChange={register.handleChange} />
            {register.errors.name && register.touched.name ? <div className='errorMessage'>{register.errors.name}</div> : <div className='message'></div>}
            <input type='text' placeholder='Phone' id='soDT' name='soDT' onChange={register.handleChange} />
            {register.errors.soDT && register.touched.soDT ? <div className='errorMessage'>{register.errors.soDT}</div> : <div className='message'></div>}
            {/* <select id="" className=''
              onChange={register.handleChange}
              name='maNhom'
              value={register.values.maNhom}>
              <option value="GP01">GP01</option>
              <option value="GP02">GP02</option>
              <option value="GP03">GP03</option>
              <option value="GP04">GP04</option>
              <option value="GP05">GP05</option>
              <option value="GP06">GP06</option>
              <option value="GP07">GP07</option>
              <option value="GP08">GP08</option>
              <option value="GP09">GP09</option>
              <option value="GP010">GP010</option>
            </select> */}
            <input type='password' placeholder='Password' id='password' name='password' onChange={register.handleChange} />
            {register.errors.password && register.touched.password ? <div className='errorMessage'>{register.errors.password}</div> : <div className='message'></div>}
            <button type='submit'>Đăng Ký</button>
          </form>
        </div>
        <div className='form-container sign-in-container'>
          <form onSubmit={login.handleSubmit}>
            <h1>Đăng Nhập</h1>
            <input
              onChange={login.handleChange}
              type="text" placeholder="Email"
              name='email'
              value={login.values.email} />

            <input
              onChange={login.handleChange}
              type="password" placeholder="Password"
              name='password'
              value={login.values.password} />
            <button type='submit'>Đăng Nhập</button>

            <div className="social mt-3 d-flex">
            <Button style={{backgroundColor:'rgb(59,89,152)'}} shape="circle" size={"large"}> <i className="fab fa-facebook-f"></i>
            </Button>
            <Button style={{backgroundColor:'rgb(255, 0, 0)'}} className="ml-3" shape="circle" size={"large"}> <i className="fab fa-google"></i>
            </Button>
            </div>

          </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1>Chào mừng trở lại!</h1>
              <p>Để duy trì kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin cá nhân của bạn</p>
              <button className='ghost' id='signIn' onClick={openSignIn}>
                  Đăng Nhập
              </button>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1>Chào bạn</h1>
              <p>Hãy nhập thông tin cá nhân của bạn và bắt đầu cuộc hành trình của bạn với chúng tôi</p>
              <button className='ghost' id='signUp' onClick={openSignUp}>
                Đăng Ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Register;
