import React from 'react'
import { hot } from 'react-hot-loader/root'

import {Header} from './shared/Header'

function AppComponent() {
  return (
    <div>
      <Header></Header>
    </div>
  )
}

export const App = hot(AppComponent)