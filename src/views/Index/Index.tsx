import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ScrollToTopHOC } from '../../common/hoc/ScrollToTop';

import { add, substract } from '../../models/index/index.action';
import { GlobalState } from '../../models/root';
import styles from './Index.css';

interface Props
  extends ReturnType<typeof mapStateToProps>,
    ReturnType<typeof mapDispatchToProps> {}

interface State {
  count: number;
}

class Index extends React.PureComponent<Props, State> {
  public readonly state = { count: 1 };

  public render() {
    const { count } = this.props;
    return (
      <div className={styles.app}>
        {count}
        <button onClick={this.add}>add</button>
        <button onClick={this.substract}>substract</button>
      </div>
    );
  }

  private add = () => {
    this.props.add(3);
  };

  private substract = () => {
    this.props.substract(4);
  };
}

const mapStateToProps = (state: GlobalState) => ({
  count: state.index.count
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ add, substract }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrollToTopHOC(Index));
