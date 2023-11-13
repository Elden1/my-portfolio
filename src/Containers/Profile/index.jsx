import { motion, useInView, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import './assets/style.scss';

const Profil = () => {  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, {once:true})

  const mainControls = useAnimation();

    useEffect(() => {
        if (isInView){
            mainControls.start("visible")
        }
    }, [isInView]);

  return (
    <motion.div
        className='profile-section'
        id='profile-section'
        initial='hidden'
        animate={mainControls}
        variants={containerVariants}
    >
      <motion.div className='profile-content' ref={ref}>
        <motion.div
          className='profile-txt'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 , delay: 0.5 }}
        >
          <h1 className='profile-txt-title'>Betsch Thomas</h1>
          <h3 className='profile-txt-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </h3>
          <h3 className='profile-txt-content'>
            Mi tempus imperdiet nulla malesuada pellentesque elit eget. Id donec ultrices tincidunt arcu non sodales neque. Urna cursus eget nunc scelerisque viverra
            mauris in. Posuere morbi leo urna molestie at elementum eu facilisis sed.
          </h3>
        </motion.div>
        <motion.div
          className='profile-img'
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{  duration: 1.5, delay: 0.5 }}
        >
          <img src='../../Images/man.jpg' alt='Betsch Thomas' />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Profil;
