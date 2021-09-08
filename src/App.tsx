import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'
import TheLayout from './containers/TheLayout'
const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse' />
  </div>
)

// Containers

// Pages

const App = (): JSX.Element => {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            path='/'
          >
            <TheLayout />
          </Route>
        </Switch>
      </React.Suspense>
    </HashRouter>
  )
}

export default App
