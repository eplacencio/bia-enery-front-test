// ref: https://nextjs.org/docs/advanced-features/error-handling
// ret: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/error_boundaries/

import React, {
  Component,
  ErrorInfo,
  ReactNode
} from 'react'

interface Props {
  children?: ReactNode;
  errorComponent?: ReactNode;
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return this.props.errorComponent ??
        <p>Something went wrong</p>
    }

    return this.props.children
  }
}

export default ErrorBoundary
