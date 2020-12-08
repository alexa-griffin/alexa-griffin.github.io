/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react'
import Html from './layout/html.html.jsx'

const glitch = keyframes`
    0%, 6%, 8%, 49%, 51%, 100% { transform: scale(1); opacity: 0.2; }  
    7% { transform: scaleY(1.7); opacity: 0.7; }
    50% { transform: scaleX(1.4);  opacity: 0.7; }
`

export default ({ data, env }) => (
  <Html
    title="404 :("
    style={css`
      text-align: center;
      overflow: hidden;
      height: 100vh;
      display: flex;
      align-content: center;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      flex-wrap: wrap;
    `}>
    <h1
      css={css`
        font-size: 55vmin;
        line-height: 55vmin;
        margin: 0;
        user-select: none;
        position: relative;
        font-weight: normal;
        &::after,
        &::before {
          content: '404';
          position: absolute;
          display: inline;
          width: 100%;
          text-align: center;
          opacity: 0.4;
        }
        &::after {
          animation: ${glitch} 0.7s linear infinite;
          top: -10px;
          left: -8px;
          color: cyan;
        }
        &::before {
          animation: ${glitch} 0.5s linear infinite;
          top: 4px;
          left: 10px;
          color: magenta;
        }
      `}>
      404
    </h1>
    <p
      css={css`
        font-size: 1.1rem;
      `}>
      Sorry, I couldn't find that :(
    </p>
    <a
      href="/"
      css={css`
        font-size: 1.2rem;
        color: ${data.styles.textColor};
        display: block;
      `}>
      Return Home
    </a>
  </Html>
)
