import { useFormik } from "formik";
import React from "react";
import { Adduser, addUserApi } from "../../redux/reducers/adminReducer";
import {UserSignUp, signupActionApi}  from "../../redux/reducers/userReducer";
import { DispatchType } from "../../redux/store";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
type Props = {};

const AddUserModal = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  const frm = useFormik({
    initialValues: {
      // id: " ",
      name: "",
      email: "",
      password: "",
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
    onSubmit: (values: UserSignUp) => {
      console.log(values);
      const action = signupActionApi(values);
      dispatch(action);
    },
  });
  return (
    
      <form onSubmit={frm.handleSubmit}>
      <div>
        {/* Modal trigger button */}

        {/* Modal Body */}
        {/* Remove data-bs-backdrop and data-bs-keyboard to allow clicking outside and pressing Escape to close */}
        <div
          className="modal fade"
          id="modalId2"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered  modal-medium"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header  text-center">
                <h5 className="modal-title " id="modalTitleId">
                   Add user
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-address-book" />
                        </span>
                      </div>
                      <input
                        onChange={frm.handleChange}
                        type="text"
                        name="name"
                        id="name"
                        className="form-control input-sm"
                        placeholder="User name"
                      />                  
                    </div>
                    {frm.errors.name && frm.touched.name ?
                        (
                          <div className="errorMessage">{frm.errors.name}</div>
                        ) : (
                          <div className="message"></div>
                        )}
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-envelope" />
                        </span>
                      </div>
                      <input
                        onChange={frm.handleChange}
                        type="text"
                        name="email"
                        id="email"
                        className="form-control input-sm"
                        placeholder="Email"                                              
                      />
                    </div>
                    {frm.errors.email && frm.touched.email ?
                        (
                          <div className="errorMessage">{frm.errors.email}</div>
                        ) : (
                          <div className="message"></div>
                        )}
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-key" />
                        </span>
                      </div>
                      <input
                         onChange={frm.handleChange}
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        className="form-control input-sm"
                      />
                    </div>
                    {frm.errors.password && frm.touched.password ?
                        (
                          <div className="errorMessage">{frm.errors.password}</div>
                        ) : (
                          <div className="message"></div>
                        )}
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-phone" />
                        </span>
                      </div>
                      <input
                        onChange={frm.handleChange}

                        type="text"
                        name="phoneNumber"
                        id="datepicker"
                        className="form-control"
                        placeholder="Phone number"
                      />                      
                    </div>
                    {frm.errors.phoneNumber && frm.touched.phoneNumber ?
                        (
                          <div className="errorMessage">{frm.errors.phoneNumber}</div>
                        ) : (
                          <div className="message"></div>
                        )}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Optional: Place to the bottom of scripts */}
      </div>
    </form>
  );
};

export default AddUserModal;
