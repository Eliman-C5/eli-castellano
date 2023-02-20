import {ContainerProp} from '@/interfaces/app_interfaces'

interface WrapperProps extends ContainerProp {
  styles?: string
}

const Wrapper = ({ children, styles = 'my-[40px] md:my-[80px]'}: WrapperProps) => {
  return (
    <div className={`w-4/5 mx-auto max-w-[1440px] ${styles}`}>
      {children}
    </div>
  );
};

export default Wrapper;