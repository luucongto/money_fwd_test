import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import routes from './routes'

const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse' />
  </div>
)

const TheContent = (): JSX.Element => {
  return (
    <main className='c-main'>
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return (route?.component != null) && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  // name={route.name}
                  render={(props: any) => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )}
                />
              )
            })}
            <Redirect from='/' to='/accountsSearch' />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
