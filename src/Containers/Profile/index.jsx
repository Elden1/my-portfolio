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
          transition={{ duration: 1.75 , delay: 0.5 }}
        >
          <h3 className='profile-txt-content'>
          Je m'appelle Thomas Betsch, et je suis un passionné de technologie et me tourne aujourd'hui vers le monde du développement, particulièrement le Frontend avec React et SCSS;
          </h3>
          <h3 className='profile-txt-content'>
          Mon objectif est de fusionner ma passion pour la technologie avec ma volonté d'apprendre et de grandir constamment. 
          <br />
          Pouvoir créer des interfaces plaisantes, interactives et intuitives fait partie de mes objectifs
          </h3>
        </motion.div>
        <motion.div
          className='profile-img'
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{  duration: 1.5, delay: 0.5 }}
        >
          <img src='Images/man.jpg' alt='Betsch Thomas' />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Profil;
