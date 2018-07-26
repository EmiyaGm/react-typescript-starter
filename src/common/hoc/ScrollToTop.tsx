import React from 'react';

export function ScrollToTopHOC(wrappedComponent: React.ComponentClass) {
  return class extends React.Component {
    public render() {
      window.scrollTo(0, 0);
      const { children, ...rest } = this.props;
      return React.createElement(wrappedComponent, rest);
    }
  };
}
