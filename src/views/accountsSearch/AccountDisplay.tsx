import {
  CButton,
  CCard,
  CCardBody, CCardHeader, CDataTable, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle
} from '@coreui/react'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { actions } from '../../redux/reducers/user'

const AccountDisplay = (props: any): JSX.Element => {
  const dispatch = useAppDispatch()
  const userId = props?.match?.params?.userId
  const [modal, setModal] = useState(false)
  useEffect(() => {
    dispatch(actions.userRequest({ userId }))
  }, [userId, dispatch])
  const userData = useAppSelector(state => { return state.user.data != null ? state.user.data : { userId, accounts: [] } })
  const isLoading = useAppSelector(state => state.user.fetching)
  const error = useAppSelector(state => { return state.user.error != null ? state.user.error : null })
  useEffect(() => {
    if (error !== null) {
      setModal(true)
    }
  }, [error])
  const fields = ['id', 'name', 'balance']
  return (
    <>
      <CCard>
        <CCardHeader>
          UserId: {userData?.userId}
        </CCardHeader>
        <CCardBody>
          {isLoading ? 'Loading'
            : (
              <CDataTable
                items={userData?.accounts}
                fields={fields}
                itemsPerPage={10}
                pagination
              />
            )}

        </CCardBody>
      </CCard>

      <CModal
        show={modal}
        onClose={setModal}
      >
        <CModalHeader closeButton>
          <CModalTitle>Error</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {error?.toUpperCase()}
        </CModalBody>
        <CModalFooter>
          <CButton
            color='primary'
            onClick={() => {
              setModal(false)
              dispatch(actions.clearError())
            }}
          >Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default AccountDisplay
