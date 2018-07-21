import React from 'react';
import { Link, Route, RouteComponentProps, Switch } from 'react-router-dom';

interface Props extends RouteComponentProps<{}> {}

const Foo = () => <div>foo</div>;
const Bar = () => <div>bar</div>;

export default class Detail extends React.PureComponent<Props> {
  public render() {
    const { match } = this.props;
    return (
      <div>
        <Link to={`${match.url}/foo`}>foo</Link>
        <Link to={`${match.url}/bar`}>bar</Link>
        <Switch>
          <Route path={`${match.url}/foo`} component={Foo} />
          <Route path={`${match.url}/bar`} component={Bar} />
        </Switch>
      </div>
    );
  }
}
