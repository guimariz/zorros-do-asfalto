import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from '../database/SidebarData'
import { IconContext } from 'react-icons'
import '../App.css'

function Sidebar() {
  const [selected, setSelected] = useState("")

  return (
    <div className="Sidebar bg-dark">
      <IconContext.Provider value={{color: '#fff'}}>
        <div className='d-flex flex-column flex-shrink-0 p-3 text-white bg-dark'>
          <ul className='nav nav-pills flex-column mb-auto SidebarList'>
            { SidebarData.map((i, key) => {
              return (
                <li key={key} className='row mb-1' id={selected == i.path ? "active" : ""} onClick={() => setSelected(i.path)}>
                  <Link to={i.path} className="nav-link text-white">
                    <svg className="bi me-2" width="16" height="16" id="icon">{i.icon}</svg>
                    <span id="title">{i.title}</span>
                  </Link>
                </li>
              )
            }) }
          </ul>
        </div>
      </IconContext.Provider>
    </div>
  )
}

export default Sidebar
