import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '../components/Layout'

import '../styles/globals.css'
import ErrorBoundary from 'components/ErrorBoundary'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ErrorBoundary>
      </QueryClientProvider>
    </>
  )
}