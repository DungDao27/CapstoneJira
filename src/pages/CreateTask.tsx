const CreateTask = () => {
  return (
    <div>
      <h2>Create Task</h2>
      <form>
        <div className="form-group">
          <label>Select Project</label>
          <select className="form-control" id="project">
            <option value="project1">Project 1</option>
            <option value="project2">Project 2</option>
            <option value="project3">Project 3</option>
          </select>
        </div>
        <div className="form-group">
          <label>Task Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select className="form-control" id="status">
            <option value="pending">Pending</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Priority</label>
            <select className="form-control" id="priority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label>Task Type</label>
            <select className="form-control" id="taskType">
              <option value="bug">Bug</option>
              <option value="feature">Feature</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Assignees</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Time Tracking</label>
          <input type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
