import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../models/demo/demo.actions';
import { GlobalState } from '../models/root';
import './App.css';

interface Props extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> { }

interface State {
  count: number;
}

class App extends React.Component<Props, State> {

  public readonly state = { count: 0 };

  public render() {
    const { action, count } = this.props;
    return (
      <div className="App">
        {count}
        <button onClick={action.increase}>+</button>
        <button onClick={action.decrease}>-</button>
        <button onClick={this.add}>3</button>
        <button onClick={action.increaseAsync}>async</button>
        <button onClick={action.addAsync.bind(this, 3)}>add async</button>
      </div>
    );
  }

  private add = () => {
    this.props.action.add(3)
  }
}

const mapStateToProps = (state: GlobalState) => ({
  count: state.demo.count
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  action: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);