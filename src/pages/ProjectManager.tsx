import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { getAllProjectThunk } from "../redux/quanLyProject/thunk";
import ReactPaginate from "react-paginate";
import { Member, Project } from "../types/quanLyProject";

const ProjectManager = () => {
  const { allProject } = useSelector((state: RootState) => state.quanLyProject);
  const [totalPrjs, setTotalPrjs] = useState(0);

  const dispatch: DispatchType = useDispatch();
  useEffect(() => {
    dispatch(getAllProjectThunk());
  }, [dispatch]);

  const handlePageClick = () => {};

  return (
    <div className="py-4">
      <h2 className="mb-5">Project management</h2>
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
                <tr key={index} className="ml-[-2px]">
                  <th scope="row">{prj?.id}</th>
                  <td className="text-info">{prj?.projectName}</td>
                  <td>{prj?.categoryName}</td>
                  <td>
                    <button className="btn btn-outline-success">
                      {prj?.creator?.name}
                    </button>
                  </td>
                  <td>
                    <div className="">
                      <div className="d-flex flex-wrap">
                        {prj?.members?.map((e: Member, index) => {
                          return (
                            <img
                              key={index}
                              src={e?.avatar}
                              alt=""
                              className="rounded-circle w-10"
                            />
                          );
                        })}
                      </div>
                      <button className="rounded-5 p-2 px-3 border">+</button>
                    </div>
                  </td>
                  <td className="d-flex">
                    <button
                      type="button"
                      className="btn btn-primary py-1 px-2 mr-1"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className="btn btn-danger py-1 px-2 ml-1">
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
      <form className="modal" id="myModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Project</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              >
                X
              </button>
            </div>

            <div className="modal-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h3 className="text-xl">Project id</h3>
                  <input type="text" className="input-group-text" disabled />
                </div>
                <div>
                  <h3 className="text-xl">Project name</h3>
                  <input type="text" className="form-control" />
                </div>
                <div>
                  <h3 className="text-xl">Project Category</h3>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-xl">Description</h3>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={8}
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
