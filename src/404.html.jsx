/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Html from "./layout/html.html.jsx"

export default ({ data, environment }) => (
    <Html title="404">
        <h1>404</h1>
        <a href="./index.html">Return home</a>
    </Html>
)