import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{}> {}

class ScrollToTopLayout extends React.Component<Props> {
  public componentDidUpdate(prevProps: Props) {
    if (prevProps.location !== this.props.location) {
      window.scrollTo(0, 0);
    }
  }

  public render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTopLayout);
