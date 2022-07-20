import React from 'react';

const WalletConnectHOC = (WrappedComponent: React.FC) => {
  return () => {
    return <WrappedComponent />;
  };
};

export default WalletConnectHOC;
