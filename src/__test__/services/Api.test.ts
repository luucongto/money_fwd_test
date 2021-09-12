import Api from '../../services/Api'

describe('Api', () => {
  test('getUser ok', async () => {
    const result = await Api.user({ userId: '1' })
    expect(result.error).toEqual(null)
    expect(result.data.userId).toEqual('1')
    expect(result.data.accounts.length).toBeGreaterThan(0)
  })

  test('getUser failed', async () => {
    const result = await Api.user({ userId: 'test' })
    expect(result.error).toEqual('user not found')
  })
})
