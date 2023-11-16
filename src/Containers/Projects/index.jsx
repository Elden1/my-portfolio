import './assets/style.scss'
import Slider from '../Slider'
import { motion, useInView, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

let Projects = () => {

    const containerVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
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
    <div className='projects-section' id='projects-section'>
        <motion.section 
            className='projects-content'
            variants={containerVariants}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.5 }}
            ref={ref}
        >      
            <Slider />
            <h3 className="project-description">
                Des projets créés pour mettre en avant certaines de mes compétences, en utilisant des technologies modernes telles que React, Redux, et SCSS. 
                <br />
                <br />
                 Les liens GitHub sont disponibles sur la page des projets
            </h3>
        </motion.section>     
    </div> 
)
}

export default Projects