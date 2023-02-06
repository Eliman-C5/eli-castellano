import React, {ReactNode} from 'react';

interface ContainerProp {
  children: ReactNode
}

const Wrapper = ({ children }: ContainerProp) => {
  return (
    <div className="w-4/5 mx-auto max-w-[1440px] my-[40px] md:my-[80px]">
      {children}
    </div>
  );
};

export default Wrapper;