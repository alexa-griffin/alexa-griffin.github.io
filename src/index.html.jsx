/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Html from './layout/html.html.jsx'

export default ({ data, env }) => (
  <Html title="Alexa Griffin">
    <h1>hi</h1>

    {JSON.stringify(data)}
  </Html>
)
