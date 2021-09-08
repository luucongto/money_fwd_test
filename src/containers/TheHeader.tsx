import CIcon from '@coreui/icons-react'
import {
  CBreadcrumbRouter, CHeader, CHeaderBrand,
  CHeaderNav, CSubheader, CToggler
} from '@coreui/react'
import React from 'react'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
// routes config
import routes from '../routes'
import { set, selectSidebarShow } from '../redux/sidebar'

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
      <CHeaderBrand className='mx-auto d-lg-none' to='/'>
        <CIcon name='logo' height='48' alt='Logo' />
      </CHeaderBrand>

      <CHeaderNav className='d-md-down-none mr-auto' />

      <CSubheader className='px-3 justify-content-between'>
        <CBreadcrumbRouter
          className='border-0 c-subheader-nav m-0 px-0 px-md-3'
          routes={routes}
        />
      </CSubheader>
    </CHeader>
  )
}

export default TheHeader
