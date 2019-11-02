import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = {hasError: false, error: null};
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    const {fallback: Fallback} = this.props;
    const {hasError, error} = this.state;
    if (hasError) {
      return <Fallback error={error} />;
    }
    return this.props.children;
  }
}
