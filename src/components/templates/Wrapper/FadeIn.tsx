import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ContainerProp } from '@/interfaces/app_interfaces';

interface FadeInProps extends ContainerProp {
  className: string
}

const FadeIn = ({ children, className }: FadeInProps) => {
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
    hidden: { opacity: 0 },
  };
  
  const controls = useAnimation();
  const [ref, inView] = useInView();

  //la idea es que con el useEffect cargemos cuando queremos que se use el hook , el ref es el que enlaza al elemento y el inview es para detectar cuando este a la vista
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;