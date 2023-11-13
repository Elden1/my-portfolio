import './assets/style.scss'
import Form from '../../Components/Form'
import { motion, useInView, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

let Contact = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true });
      const mainControls = useAnimation();
    
      useEffect(() => {
        if (isInView) {
          mainControls.start('visible');
        }
      }, [isInView]);
    return(   
    <motion.div 
    className='contact-section' 
    id='contact-section'
    initial='hidden'
    animate={mainControls}
    variants={containerVariants}
    ref={ref}
    >
        <motion.article 
            className="contact-content"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 , delay: 0.5 }}
        >
            <div className="contact-txt">
            <h2 className="contact-title">
                Etes vous intéressez par mes compétences ?
            </h2>
            <p className="contact-des">
                N'hésitez pas à remplire ce formulaire et je vous recontacterez sans délais.
            </p>
            </div>
            <Form />
        </motion.article>
        <motion.section 
        className="contact-sm"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 , delay: 0.5 }}
        >
            <img 
                src="../../Images/email-icon-jpg-13.jpg" 
                alt="symbole email" 
                className="contact-img"
            />
            <div className="contact-sm-links">
                <img src="../../Images/icones/instagram.png" alt="" />
                <img src="../../Images/icones/linkedin.png" alt="" />
                <img src="../../Images/icones/twitter.png" alt="" />
            </div>
        </motion.section>
    </motion.div> 
    )
}

export default Contact