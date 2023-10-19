import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../redux/store";
import { useEffect, useState, useRef } from "react";
import {
  deleteProjectThunk,
  getAllProjectThunk,
  getProjectDetailThunk,
  updateProjectThunk,
} from "../redux/quanLyProject/thunk";
import ReactPaginate from "react-paginate";
import { Member, Project } from "../types/quanLyProject";
const ProjectManager = () => {
  const { allProject, prjDetail } = useSelector(
    (state: RootState) => state.quanLyProject
  );
  const category = prjDetail?.projectCategory?.name;

  const [totalPrjs, setTotalPrjs] = useState(0);

  const dispatch: DispatchType = useDispatch();
  useEffect(() => {
    dispatch(getAllProjectThunk());
  }, [dispatch]);

  const handlePageClick = () => {};

  const [formData, setFormData] = useState({
    id: 0,
    projectName: "",
    creator: 0,
    description: "",
    category: 0,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const payload = {
      id: formData.id,
      projectName: formData.projectName,
      creator: formData.creator,
      description: formData.description,
      categoryId: formData.category,
    };
    dispatch(updateProjectThunk(payload));
  };

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
            {allProject.map((prj: Project, index) => {
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
                  <td className="d-flex">
                    <button
                      onClick={() => {
                        dispatch(getProjectDetailThunk(prj?.id))
                          .then((res) => {
                            const data: any = res.payload;
                            const {
                              id,
                              projectName,
                              creator,
                              description,
                              projectCategory,
                            } = data;
                            setFormData({
                              id,
                              projectName,
                              creator: creator.id,
                              description,
                              category: projectCategory.id,
                            });
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                      className="btn btn-primary py-1 px-2 mr-1"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      onClick={() => {
                        dispatch(deleteProjectThunk(prj?.id));
                      }}
                      className="btn btn-danger py-1 px-2 ml-1"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ReactPaginate
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
        />
      </div>
      <form
        className="modal"
        id="myModal"
        tabIndex={-1}
        onSubmit={handleFormSubmit}
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
                    value={formData.id}
                  />
                </div>
                <div className="col-4">
                  <h3 className="text-xl">Project name</h3>
                  <input
                    type="text"
                    name="projectName"
                    className="form-control"
                    value={formData?.projectName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-4">
                  <h3 className="text-xl">Project Category</h3>
                  <select
                    name="category"
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
};

export default ProjectManager;
