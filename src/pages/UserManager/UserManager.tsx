import React, { useEffect, useState } from "react";
import "../../style/style.scss";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import {
  User,
  getUserListApi,
  deleteUserApi,
} from "../../redux/reducers/adminReducer";
import { Pagination, Tabs } from "antd";
import { useFormik } from "formik";
import { string } from "yup";
import { USER_LOGIN, getStoreJson } from "../../utility/config";
import AddUserModal from "../../components/AddUserModal/AddUserModal";
import EditUserModal from "../../components/EditUserModal/EditUserModal";
import { history } from "../..";

const { TabPane } = Tabs;

type Props = {};

const UserManager = (props: Props) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const { userSignIn } = useSelector((state: RootState) => state.userReducer)
  if (!getStoreJson(USER_LOGIN)) {
    history.push('/')
  }
  const {userList} = useSelector((state: RootState) => state.adminReducer);
  const filteredUserList = userList.filter((item) =>
    item.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );



  const dispatch: DispatchType = useDispatch();
  console.log(userList);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("users");

  
  const getUserList = async () => {
    const action = getUserListApi();
    dispatch(action);
  };

  useEffect(() => {
    getUserList();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);



  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div className="admin-page">
      <div className="container-xl">
      <AddUserModal />
      <EditUserModal user={selectedUser} />
        <Tabs activeKey={activeTab} onChange={handleTabChange}>
          <TabPane className='fw-semibold'  key="users">
          <div className="search-bar">
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Search by name..."
              />
            </div>
            <div className="table-responsive">
              <div className="table-wrapper">
                <div className="table-title">
                  <div className="row">
                    <div className="col-sm-5">
                      <h2>
                        User <b>Management</b>
                      </h2>
                    </div>
                    <div className="col-sm-7">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#modalId2"
                        className="btn btn-secondary"
                      >
                        <i className="material-icons"></i>{" "}
                        <span>Add New User</span>
                      </button>
                    </div>
                    <div className="col-sm-7">
                    </div>
                  </div>
                </div>
                <table className="table  table-hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Email</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th className="text-center">
                        <i className="fa fa-cog"></i>
                      </th>
                    </tr>
                  </thead>
                  {/* Table body */}
                  <tbody>
                    {filteredUserList
                      ?.slice((currentPage - 1) * 6, currentPage * 6)
                      .map((item, index) => {
                        const actualIndex = (currentPage - 1) * 6 + index + 1;
                        return (
                          <tr key={index}>
                            <td>{actualIndex}</td>
                            <td className="text-primary fw-bold">
                              {item.email}
                            </td>
                            <td>{item.name}</td>
                            <td>{item.phoneNumber}</td>
                            <td>
                              <div className="btn-group" role="group">
                                <button
                                  onClick={() => {
                                    setSelectedUser(item);
                                  }}
                                  data-bs-toggle="modal"
                                  data-bs-target="#modalEditUser"
                                  className="btn btn-warning mx-2"
                                >
                                  Edit
                                </button>
                                <button
                                onClick={() => {
                                  const action = deleteUserApi(
                                    item.id
                                  );
                                  dispatch(action);
                                }}
                                style={{ verticalAlign: "middle" }}
                                className="btn btn-danger"
                              >
                                Delete
                              </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
                {/* Pagination */}
                <div className="clearfix">
                  <ul className="pagination">
                    <Pagination
                      defaultCurrent={1}
                      total={userList.length}
                      pageSize={6}
                      onChange={handlePageChange}
                    />
                  </ul>
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default UserManager;