import * as React from 'react';
import { RouteProps, Redirect } from 'react-router-dom';

interface AuthorizedRouteProps extends RouteProps {
  redirect: string;
  authority: boolean;
}

export class Authorized extends React.Component<AuthorizedRouteProps> {
  public render() {
    const { component, redirect, authority } = this.props;
    return authority ? (
      component
    ) : (
      <Redirect from={this.props.path} to={redirect} />
    );
  }
}
