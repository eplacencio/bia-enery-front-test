import {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head/>
      <body>
        <Main />
        <NextScript />
        <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"/>
        <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"/>
      </body>
    </Html>
  )
}