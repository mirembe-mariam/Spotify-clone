import React from 'react'
import "./SidebarOptions.css"
function SidebarOptions({title,Icon}) {
  return (
    <div className='sidebarOptions'>
      {Icon && <Icon className="sidebarOption__icon"/>} {/*this checks whether the Icon prop exists and if it exists it renders the icon with that classname*/}
       {Icon ? <h4>{title}</h4> : <p>{title}</p>} {/*renders the title orop inside the h4 if the Icon exists and renders the p element if icon doesnt exist*/}
    </div>
  )
}

export default SidebarOptions
