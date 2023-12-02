import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Progress from './components/Progress';
import Header from './components/Header';

const MarketingLasy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route exact path="/" component={MarketingLasy} />
              <Route path="/auth" component={AuthLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
}
