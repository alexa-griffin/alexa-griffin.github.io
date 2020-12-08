/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export default props => (
  <main
    css={css`
      ${props.style};
      width: 95%;
      max-width: var(--max-width);
    `}>
    {props.children}
  </main>
)
