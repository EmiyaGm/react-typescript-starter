import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { add, decrease, increase } from '../models/demo/demo.actions';
import { DemoState } from '../models/demo/demo.reducer';
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
      </div>
    );
  }

  private add = () => {
    this.props.onAdd(3);
  }
}

const mapStateToProps = ({ demo }: { demo: DemoState }) => ({
  count: demo.count
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onIncrease() {
    dispatch(increase());
  },
  onDecrease() {
    dispatch(decrease());
  },
  onAdd(count: number) {
    dispatch(add(count))
  },
  onIncreaseAsync() {
    dispatch({ type: 'INCREMENT_ASYNC' })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);