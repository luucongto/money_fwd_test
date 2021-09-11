import React from 'react'

const AccountsSearch = React.lazy(
  async () => await import('../views/accountsSearch/AccountsSearch')
)
const AccountDisplay = React.lazy(
  async () => await import('../views/accountsSearch/AccountDisplay')
)

const routes = [
  { path: '/', exact: true, name: 'Home' },
  {
    path: '/accountsSearch',
    exact: true,
    name: 'AccountsSearch',
    component: AccountsSearch
  },
  {
    path: '/accountDisplay/:userId',
    name: 'AccountsDisplay',
    component: AccountDisplay
  }
]

export default routes
