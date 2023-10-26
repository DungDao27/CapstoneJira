import React from 'react'
import { DispatchType } from '../../Redux/configStore'
import { useDispatch } from 'react-redux'

type Props = {}

export default function Sidebar({}: Props) {
  const dispatch:DispatchType = useDispatch();
  return (
    <div className="sideBar">
        <div className="sideBar-item">
          <div className="mt-4 pb-3">
            <i
              className="fab fa-jira text-white"
              style={{ fontSize: 35, cursor: "pointer" }}
            />
            <span className='ms-2'>Jira</span>
            <br></br>
          </div>
          <span className='ms-2'>Software Project</span>
        </div>
      </div>
  )
}