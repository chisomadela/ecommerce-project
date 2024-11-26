import React from 'react'
import DashNavbar from '../components/DashNavbar'

function layout({children}) {
  return (
    <div>
        <DashNavbar/>

        {children}
    </div>
  )
}

export default layout