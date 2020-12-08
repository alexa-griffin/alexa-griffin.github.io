/** @jsx jsx */
import { css, jsx, Global } from '@emotion/react'
import styles from '../../data/styles.json' //TODO: is this the best way to do this?

export default props => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{props.title}</title>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,700&display=swap');

          ::selection {
            background-color: ${styles.selectionColor};
          }

          * {
            box-sizing: border-box;
          }

          body {
            font-family: ${styles.font};
            background-color: ${styles.backgroundColor};
            color: ${styles.textColor};
            margin: 0;
          }
        `}
      />
    </head>
    <body css={props.style}>{props.children}</body>
  </html>
)
