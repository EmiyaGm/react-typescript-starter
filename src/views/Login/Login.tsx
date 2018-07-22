import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { startLogin } from '../../models/login/login.action';
import styles from './Login.css';
import { GlobalState } from '../../models/root';

interface Props
  extends ReturnType<typeof mapStateToProps>,
    ReturnType<typeof mapDispatchToProps> {}

class Login extends React.PureComponent<Props> {
  public render() {
    const { status, user } = this.props;
    return (
      <div className={styles.login}>
        {status && user && user.mobile}
        <button onClick={this.handleLogin}>login</button>
      </div>
    );
  }

  private handleLogin = () => {
    this.props.startLogin('13913913913', 'abcd1234');
  };
}

const mapStateToProps = (state: GlobalState) => ({
  status: state.login.status,
  user: state.login.user
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ startLogin }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
