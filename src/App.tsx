import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import './App.css';
import logo from './logo.svg';
import { add, decrease, DemoActions, increase } from './redux/demo/demo.actions';
import { DemoState } from './redux/demo/demo.reducer';


interface Props {
  count: number;
  onIncrease(): void;
  onDecrease(): void;
  onAdd(count: number): void;
}

interface State {
  inputCount: number
}

class App extends React.Component<Props, State> {

  public state = {
    inputCount: 0
  };

  public add = () => {
    this.props.onAdd(3);
  }

  public render() {
    const { count, onIncrease, onDecrease } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        {count}
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
        <button onClick={this.add}>3</button>
      </div>
    );
  }
}

const mapStateToProps = ({ demo }: { demo: DemoState }) => ({
  count: demo.count
});

const mapDispatchToProps = (dispatch: Dispatch<DemoActions>) => ({
  onIncrease() {
    dispatch(increase());
  },
  onDecrease() {
    dispatch(decrease());
  },
  onAdd(count: number) {
    dispatch(add(count))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
