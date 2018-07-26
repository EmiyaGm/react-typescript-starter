import * as React from 'react';
import { RouteProps } from 'react-router-dom';

interface AuthorizedRouteProps extends RouteProps {
  path: string;
  redirect: string;
  authority: boolean | Promise<boolean>;
}

export class Authorized extends React.Component<AuthorizedRouteProps> {
  public render() {
    return null;
  }
}