import reducer, { set, SidebarStatus } from '../../../redux/reducers/sidebar'

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    sidebarShow: 'responsive'
  })
})

test('should handle set', () => {
  const previousState: SidebarStatus = { sidebarShow: 'responsive' }
  expect(reducer(previousState, set(false))).toEqual({
    sidebarShow: false
  })
})
