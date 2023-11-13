import './assets/style.scss'
import { motion, useInView, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Skills = () => {
  const data = {
    labels: ["React", "Javascript", "PHP", "HTML5", "CSS3", "SCSS"],
    datasets: [
      {
        label: "Niveau des compétences",
        data: [90, 85, 50, 100, 100, 100], 
        backgroundColor: 'rgba(75, 192, 192, 0.2)', 
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderWidth: 1,
      },
    ],
  };

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

  return (
    <motion.div
      className="skills-section"
      id="skills-section"
      variants={containerVariants}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.5 }}
      ref={ref}
    >
        <motion.h2 className="skills-title" ref={ref}>
            Mes compétences
        </motion.h2>
        <Bar
          data={data}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                max: 125, 
              },
            },
          }}
        />
    </motion.div>
  );
};

export default Skills;