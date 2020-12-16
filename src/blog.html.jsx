/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react'
import Html from './layout/html.html.jsx'
import Main from './components/main.html.jsx'

export default ({ data, env }) => (
  <Html title="blog">
    <Main>
      <h1>blog</h1>
    </Main>
  </Html>
)
