import { useState } from "react";
import { DispatchType, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  createProjectThunk,
  getProjectCategoryThunk,
} from "../redux/quanLyProject/thunk";

const CreateProject = () => {
  const { prjCategory } = useSelector(
    (state: RootState) => state.quanLyProject
  );

  const dispatch: DispatchType = useDispatch();

  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    categoryId: 0,
    alias: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const payload = {
      projectName: formData.projectName,
      description: formData.description,
      categoryId: formData.categoryId,
      alias: formData.projectName.toLowerCase().replace(/ /g, "-"),
    };
    dispatch(createProjectThunk(payload));
  };

  useEffect(() => {
    dispatch(getProjectCategoryThunk());
  }, [dispatch]);

  return (
    <div>
      <h2>Create Project</h2>
      <form className="mt-5" onSubmit={handleFormSubmit}>
        <div className="form-group mb-5">
          <label htmlFor="file-name">Name</label>
          <input
            type="text"
            className="form-control"
            id="file-name"
            required
            onChange={handleInputChange}
            name="projectName"
          />
        </div>
        <div className="form-group mb-5">
          <label htmlFor="file-description">Description</label>
          <textarea
            className="form-control"
            id="file-description"
            rows={10}
            required
            onChange={handleInputChange}
            name="description"
          />
        </div>
        <div className="form-group mb-5">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleInputChange}
            name="categoryId"
          >
            {prjCategory.map((cate: any) => {
              return (
                <option value={cate?.id}>{cate?.projectCategoryName}</option>
              );
            })}
          </select>
        </div>
        <button className="btn btn-primary">Create Project</button>
      </form>
    </div>
  );
};

export default CreateProject;
