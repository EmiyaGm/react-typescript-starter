import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../../models/todo/todo.action';
import { GlobalState } from '../../models/root';
import styles from './Todo.css';

interface Props
  extends ReturnType<typeof mapStateToProps>,
    ReturnType<typeof mapDispathToProps> {}

class Todo extends React.PureComponent<Props> {
  public render() {
    return (
      <div className={styles.todo}>
        <input
          type="text"
          value={this.props.input}
          onChange={e => this.props.onInputChange(e.target.value)}
        />
        <button onClick={this.props.addTodo.bind(this, this.props.input)}>
          +
        </button>
        <ul>
          {this.props.todos.map(todo => <li key={todo.id}>{todo.content}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: GlobalState) => ({
  input: state.todo.input,
  todos: state.todo.todos
});

const mapDispathToProps = (dispatch: Dispatch) =>
  bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Todo);
