import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheHeader
} from './index'

const TheLayout = (): JSX.Element => {
  return (
    <div style={{ flexDirection: 'column' }}>
      <TheHeader />
      <div className='c-app c-default-layout'>
        <TheSidebar />
        <div className='c-wrapper' style={{ marginTop: 56 }}>
          <div className='c-body'>
            <TheContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheLayout
