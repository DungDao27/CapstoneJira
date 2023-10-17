import React, { useEffect, useState } from "react";
import { UserEdit, editUserApi } from "../../redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import { User } from "../../redux/reducers/adminReducer";
import { useFormik } from "formik";
type EditUserModalProps = {
  user: User | null;
};
type Props = {};

const EditUserModal = (props: EditUserModalProps) => {
    const dispatch : DispatchType = useDispatch()
  const [formValues, setFormValues] = useState<UserEdit>({
    id: "",
    email: "",
    password: "",
    name: "",
    phoneNumber: ""
  });

  const { user } = props;
  useEffect(() => {
    if (user) {
      setFormValues ({
        id : user.id,
        name : user.name,
        email  : user.email,
        phoneNumber : user.phoneNumber,
        password : ''
      })
    }
  }, [user]);

  const frm = useFormik({
    initialValues: formValues,
    onSubmit:(values:UserEdit)=> {
       const action  = editUserApi(values);
       dispatch (action)
    }
  });
  
  useEffect(() => {
    frm.setValues(formValues);
  }, [formValues]);
  
  console.log(user);

  return (
    <form onSubmit={frm.handleSubmit}>
      <div>
        {/* Modal trigger button */}

        {/* Modal Body */}
        {/* Remove data-bs-backdrop and data-bs-keyboard to allow clicking outside and pressing Escape to close */}
        <div
          className="modal fade"
          id="modalEditUser"
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
                  Update user
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
                        name="hoTen"
                        id="name"
                        className="form-control input-sm"
                        placeholder="Full name"
                        value={frm.values.name} 
                      />
                    </div>
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
                        value={frm.values.email}
                        
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-key" />
                        </span>
                      </div>
                      <input
                        type="password"
                        name="matKhau"
                        id="password"
                        className="form-control input-sm"
                        placeholder="Password"
                      />
                    </div>
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
                        value={frm.values.phoneNumber}
                       
                      />
                    </div>
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
                  Update
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

export default EditUserModal;
