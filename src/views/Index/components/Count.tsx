import React from 'react';

interface Props {
  count: number;
}

const Counter: React.SFC<Props> = props => {
  const { count, children } = props;
  return (
    <div>
      <>
        {count}
        {children}
      </>
    </div>
  );
};

export default Counter;
