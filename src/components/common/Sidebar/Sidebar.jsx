import { useState } from 'react'
import useKeyDown from '../../../hooks/useKeyDown'
import SidebarItem from './SidebarItem/SidebarItem'
import SidebarHeader from './SidebarHeader/SidebarHeader'
import SidebarSearch from './SidebarSearch/SidebarSearch'
import SidebarTheme from './SidebarTheme/SidebarTheme'
import SidebarProfile from './SidebarProfile/SidebarProfile'
import SidebarExpander from './SidebarExpander/SidebarExpander'
import './Sidebar.scss'

function Sidebar() {
  const [expand, setExpand] = useState(false)

  const expandHandler = () => {
    setExpand(!expand)
  }

  const style = {
    expand: expand ? 'expand' : ''
  }

  useKeyDown(
    (event) => {
      if (event.ctrlKey) {
        setExpand((isExpand) => !isExpand)
      }
    },
    ['B', 'b']
  )

  return (
    <div className={`c-sidebar ${style.expand}`} role="presentation">
      <div className="sidebar-expander-container" onClick={expandHandler} role="presentation">
        <SidebarExpander className="sidebar-expander" />
      </div>

      <div className="sidebar-header-container">
        <SidebarHeader className="sidebar-header" isExpand={expand} />
      </div>

      <div className="sidebar-search-container">
        <SidebarSearch className="sidebar-search" isExpand={expand} />
      </div>

      <div className="sidebar-items-container">
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
      </div>

      <div className="sidebar-theme-container">
        <SidebarTheme />
      </div>

      <div className="sidebar-profile-container">
        <SidebarProfile className="sidebar-profile" isExpand={expand} />
      </div>
    </div>
  )
}

Sidebar.propTypes = {}

export default Sidebar