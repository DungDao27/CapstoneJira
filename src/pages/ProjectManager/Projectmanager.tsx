import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import { Project, getProjectListApi, Member} from '../../redux/reducers/projectReducer';
import { Pagination, Tabs } from "antd";


const { TabPane } = Tabs;
type Props = {}

const Projectmanager = (props: Props) => {
  const [selectedUser, setSelectedUser] = useState<Project | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  // const { userSignIn } = useSelector((state: RootState) => state.projectReducer)
  // if (!getStoreJson(USER_LOGIN)) {
  //   history.push('/')
  // }
  const {projectList} = useSelector((state: RootState) => state.projectReducer);
  const filteredProjectList = projectList.filter((itemp) =>
    itemp.projectName.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const dispatch: DispatchType = useDispatch();
  console.log(projectList);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("users");

  
  const getProjectList = async () => {
    const action = getProjectListApi();
    dispatch(action);
  };

  useEffect(() => {
    getProjectList();
  }, []);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };
    const [formData, setFormData] = useState({
    id: 0,
    projectName: "",
    creator: 0,
    description: "",
    category: 0,
  });

  return (
    <div className="py-4">
      <div className="d-flex">
        <h2 className="mb-5">Project management</h2>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">projectName</th>
              <th scope="col">category</th>
              <th scope="col">creator</th>
              <th scope="col">members</th>
              <th className="px-8" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProjectList?.slice((currentPage - 1) * 8, currentPage * 8)
                      .map((prj: Project, index) => {
                        const actualIndex = (currentPage - 1) * 8 + index + 1;
              return (
                <tr key={index} className="ml-[-2px] position-relative">
                  <th scope="row">{prj?.id}</th>
                  <td className="text-info">{prj?.projectName}</td>
                  <td>{prj?.categoryName}</td>
                  <td>
                    <button className="btn btn-outline-success">
                      {prj?.creator?.name}
                    </button>
                  </td>
                  <td>
                    <div>
                      <div className="d-flex flex-wrap">
                        {prj?.members?.map((e: Member, index) => {
                          return (
                            <div key={index}>
                              <img
                                src={e?.avatar}
                                alt=""
                                className="rounded-circle w-10"
                              />
                            </div>
                          );
                        })}
                      </div>
                      <button className="rounded-5 p-2 px-3 border">+</button>
                    </div>
                  </td>
                  <td>
                    <div className="btn-group" role="group">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#modalEditUser"
                        className="btn btn-warning mx-2"
                      >
                        Edit
                      </button>
                      <button
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
        {/* <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={69}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page=item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        /> */}
        {/* Pagination */}
        <div className="clearfix">
          <ul className="pagination">
            <Pagination
              defaultCurrent={1}
              total={projectList.length}
              pageSize={8}
              onChange={handlePageChange}
            />
          </ul>
        </div>
      </div>
      <form
        className="modal"
        id="myModal"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Project</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <div className="d-flex justify-content-between">
                <div className="col-4">
                  <h3 className="text-xl">Project id</h3>
                  <input
                    className="input-group-text"
                    disabled
                    value={formData?.id}
                  />
                </div>
                <div className="col-4">
                  <h3 className="text-xl">Project name</h3>
                  <input
                    type="text"
                    name="projectName"
                    className="form-control"
                    value={formData?.projectName}
                  />
                </div>
                <div className="col-4">
                  <h3 className="text-xl">Project Category</h3>
                  <select
                    name="category"
                    className="form-select"
                    aria-label="Default select example"
                    value={formData.category}
                  >
                    <option value={3}>Dự án di động</option>
                    <option value={1}>Dự án web</option>
                    <option value={2}>Dự án phần mềm</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-xl">Description</h3>
                <textarea
                  name="description"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={8}
                  value={formData.description}
                ></textarea>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button className="btn btn-primary" data-bs-dismiss="modal">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Projectmanager;