/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Html from "./layout/html.html.jsx"

export default ({ data, environment }) => (
    <Html title="Alexa Griffin">
        <h1 css={css`
            font-weight: normal;
        `}>heck</h1>
        <div css={css({
            backgroundColor: "#f0f"
        })}>
            heck
        </div>
    </Html >
)