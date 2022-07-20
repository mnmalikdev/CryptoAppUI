import React from 'react';

const HomeHoc = (WrappedComponent: React.FC) => {
  return () => {
    return <WrappedComponent />;
  };
};

export default HomeHoc;
