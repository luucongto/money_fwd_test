import apisauce from 'apisauce'
import { UserRequest } from '../redux/sagas/userSaga'
const autoBind = require('react-autobind')
export interface IResponse {
  data: any
  error: string | null

}
class API {
  api: any
  constructor (baseURL = 'https://sample-accounts-api.herokuapp.com/') {
    this.api = apisauce.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      timeout: 15000
    })
    autoBind(this)
  }

  async user (params: UserRequest): Promise<IResponse> {
    try {
      const data = await this.api.get(`users/${params?.userId}/accounts`)
      if (data?.data !== null) {
        const accounts = data.data.map((each: any) => {
          return each.attributes
        })
        return {
          error: null,
          data: {
            userId: params?.userId,
            accounts
          }
        }
      } else {
        return {
          error: 'user not found',
          data: null
        }
      }
    } catch (error) {
      return {
        error: 'failed',
        data: null
      }
    }
  }
}

const api = new API()

export default api
