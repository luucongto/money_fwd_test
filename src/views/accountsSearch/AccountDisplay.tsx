import {
  CCard,
  CCardBody, CCardHeader, CDataTable
} from '@coreui/react'
import { useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { actions } from '../../redux/reducers/user'

const AccountDisplay = (props: any): JSX.Element => {
  const dispatch = useAppDispatch()
  const alert = useAlert()
  const userId = props?.match?.params?.userId
  useEffect(() => {
    dispatch(actions.userRequest({ userId }))
  }, [userId, dispatch])
  const userData = useAppSelector(state => { return state.user.data != null ? state.user.data : { userId, accounts: [] } })
  const isLoading = useAppSelector(state => state.user.fetching)
  const error = useAppSelector(state => { return state.user.error != null ? state.user.error : null })
  useEffect(() => {
    if (error !== null) {
      alert.show(error)
      dispatch(actions.clearError())
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
    </>
  )
}

export default AccountDisplay
