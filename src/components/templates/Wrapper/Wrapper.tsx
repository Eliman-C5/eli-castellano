import {ContainerProp} from '@/interfaces/app_interfaces'

const Wrapper = ({ children }: ContainerProp) => {
  return (
    <div className="w-4/5 mx-auto max-w-[1440px] my-[40px] md:my-[80px]">
      {children}
    </div>
  );
};

export default Wrapper;