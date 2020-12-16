/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styles from '../../data/styles.json' //TODO: is this the best way to do this?

export default props => (
  <main
    css={css`
      ${props.style};
      width: 95%;
      max-width: ${styles.maxWidth};
      margin: 0 auto;
    `}>
    {props.children}
  </main>
)
