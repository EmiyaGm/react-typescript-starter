import React from 'react';

interface Props {
  count: number;
}

const Counter: React.SFC<Props> = props => {
  const { count, children } = props;
  return (
    <>
      {count}
      {children}
    </>
  );
};

export default Counter;
