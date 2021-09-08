import React from 'react'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { set, selectSidebarShow } from '../redux/sidebar'
import {
  CCreateElement,
  CSidebar,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem
} from '@coreui/react'

// sidebar nav config
import navigation from './_nav'
const TheSidebar = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const show = useAppSelector(state => selectSidebarShow(state))

  return (
    <CSidebar
      show={show}
      onShowChange={(val: boolean | string |undefined) => dispatch(set(val))}
    >
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className='c-d-md-down-none' />
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
