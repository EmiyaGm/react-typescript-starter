import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { add, addAsync, decrease, increase, increaseAsync } from '../models/demo/demo.actions';
import { GlobalState } from '../models/root';
import './App.css';

interface Props extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> { }

interface State {
  count: number;
}

class App extends React.Component<Props, State> {

  public readonly state = { count: 0 };

  public render() {
    const { count, onIncrease, onDecrease } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        {count}
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
        <button onClick={this.add}>3</button>
        <button onClick={this.props.onIncreaseAsync}>async</button>
        <button onClick={this.props.onAddSync.bind(this, 3)}>add async</button>
      </div>
    );
  }

  private add = () => {
    this.props.onAdd(3);
  }
}

const mapStateToProps = (state: GlobalState) => ({
  count: state.demo.count
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAdd: bindActionCreators(add, dispatch),
  onAddSync: bindActionCreators(addAsync, dispatch),
  onDecrease: bindActionCreators(decrease, dispatch),
  onIncrease: bindActionCreators(increase, dispatch),
  onIncreaseAsync: bindActionCreators(increaseAsync, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);