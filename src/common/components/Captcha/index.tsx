import React from 'react';
import { Button } from 'antd';
import { BaseButtonProps } from 'antd/lib/button/button';

interface Props extends BaseButtonProps {
  text: string;
  trigger?: boolean;
  loadingText(c: number): string;
  onClick(): void;
}

interface State {
  count: number;
}

export class Captcha extends React.PureComponent<Props, State> {
  public static defaultProps = {
    trigger: true
  };

  public state = { count: 0 };

  private interval: NodeJS.Timer;

  public render() {
    const { text, loadingText } = this.props;
    const { count } = this.state;
    const isLoading = this.state.count > 0;
    return (
      <Button disabled={isLoading} onClick={this.handleClick}>
        {isLoading ? loadingText(count) : text}
      </Button>
    );
  }

  private handleClick = () => {
    const { onClick, trigger } = this.props;
    if (!trigger) {
      return;
    }
    let count = 60;
    onClick();
    this.setState({ count });
    this.interval = setInterval(() => {
      count -= 1;
      this.setState({ count });
      if (count === 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  };
}
