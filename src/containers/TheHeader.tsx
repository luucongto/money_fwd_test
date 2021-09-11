import { CHeader, CToggler } from '@coreui/react'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { selectSidebarShow, set } from '../redux/reducers/sidebar'

const TheHeader = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const sidebarShow = useAppSelector(state => selectSidebarShow(state))

  const toggleSidebar = (): void => {
    const val = [true, 'responsive', undefined].includes(sidebarShow) ? false : 'responsive'
    dispatch(set(val))
  }

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className='ml-3 d-md-down-none'
        onClick={toggleSidebar}
      />
      <h4 className='card-title mb-0' style={{ alignSelf: 'center' }}>Account Management</h4>
    </CHeader>
  )
}

export default TheHeader
