import { dataContent } from '../../content';
import { useParams } from "react-router-dom";
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import ProjectSlider from '../../Components/SliderProject';
import './assets/style.scss';

import Header from '../../Containers/Header';
import Footer from '../../Containers/Footer';

let ProjectPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  let { projectId } = useParams();

  let projectData = dataContent.projectData;

  let currentProject = projectData.find((project) => project.id === projectId);

  if (!currentProject) {
    return (
      <p>Project not found</p>
    );
  } else {
    return (
      <motion.section 
      className="project-page"
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      >
      <Header />
      <section className="project-details">
        <motion.article 
        className="project-slide"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay : 0.2 }}
        >
          <ProjectSlider 
            images={currentProject.image}
          />
        </motion.article>
        
        <motion.div 
        className="project-content"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay : 0.2 }}
        >
          <div className="text">
            <h2>{currentProject.title}</h2>
            <p>{currentProject.description}</p>
          </div>

          <article className="projects-elements">
          <div className='skill-content'>
            {currentProject.skills.map((skill, index) => (
            <span key={index} className="skill-item">
            {skill}
            {index < currentProject.skills.length - 1 && ''}
            </span>
            ))}
          </div>
          <Link className='git-link' to={currentProject.git_repo}>
                <img src="./Images/git-png.png" alt="Liens vers le repo Git" className='git-link-img'/> 
                <h2>Repo Git</h2>
          </Link>
          </article>
        </motion.div>
      </section>
      <Footer />
    </motion.section>
  );
};
};

export default ProjectPage;