import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AppBar = () => {
  return (
    <div>
      <div>
        <NavLink to='register'>Register</NavLink>
        <NavLink to='singin'>signin</NavLink>
      </div>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default AppBar
