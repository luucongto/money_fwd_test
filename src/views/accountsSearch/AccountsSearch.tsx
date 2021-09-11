import {
  CButton,
  CCard,
  CCardBody, CCol, CInput, CRow
} from '@coreui/react'
import { useState } from 'react'

import { useHistory } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks'
import { actions } from '../../redux/reducers/user'
const AccountsSearch = (): JSX.Element => {
  const [userId, setUserId] = useState('')
  const history = useHistory()
  const handleSubmit = (): void => {
    history.push(`/accountDisplay/${userId}`)
  }

  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm='5'>
              <CInput
                id='name' placeholder='Enter the userID' required value={userId} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setUserId(event.target.value)
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleSubmit()
                  }
                }}
              />
            </CCol>
            <CCol>
              <CButton type='submit' color='primary' style={{ justifySelf: 'center' }} onClick={handleSubmit}>Search</CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default AccountsSearch
