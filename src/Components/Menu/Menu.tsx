import React from 'react'
import { NavLink} from 'react-router-dom'
import { USER_LOGIN } from '../../Util/config'
import { loginAction } from '../../Redux/reducers/userLoginReducer'
import { DispatchType } from "../../Redux/configStore";
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../..';
type Props = {}

export default function Menu({}: Props) {
  const dispatch: DispatchType = useDispatch();
  const logOut = () => {
    localStorage.removeItem(USER_LOGIN);
    const action = loginAction({});
    dispatch(action);
    history.push('/')
  }
  return (
    <div className="menu">
        <div className="control">
          <NavLink
            end
            className={({isActive})=>isActive? 'font-weight-bold t-dec a-hover active' : 'font-weight-bold t-dec a-hover'}
            to="/project"
          >
            <div>
              <i className="fa fa-cog" />
              <span className="ms-2">Project Management</span>
            </div>
          </NavLink>
          <NavLink
            className={({isActive})=>isActive? 'font-weight-bold t-dec a-hover active' : 'font-weight-bold t-dec a-hover'}
            to="/createproject"
          >
            <div>
              <i className="fa fa-cog" />
              <span className="ms-2">Create Project</span>
            </div>
          </NavLink>
          <NavLink
            className={({isActive})=>isActive? 'font-weight-bold t-dec a-hover active' : 'font-weight-bold t-dec a-hover'}
            to="/usermanagement"
          >
            <div>
              <i className="fa fa-cog" />
              <span className="ms-2">User Management</span>
            </div>
          </NavLink>
        <div className="d-flex" onClick={logOut}>
          <NavLink className="text-dark" to="/">
            <p>Log Out</p>
          </NavLink>
        </div>
        </div>
      </div>
  )
}