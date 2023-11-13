import './assets/style.scss'    
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { dataContent } from '../../content'
import { Link } from 'react-router-dom';

let Slider = () => {

  let data = dataContent.projectData 

  const responsive = {

    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      slidesToSlide: 3,
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      slidesToSlide: 3,
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      slidesToSlide: 2,
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      slidesToSlide: 1,
      items: 1
    }
  };

  let listProjects = data.map((dataProjects) =>{
return (
  
<Link to={`/project/${dataProjects.id}`} className="card-slide" key={dataProjects.id} id={dataProjects.id}>
    <div className="card-img">
        <img 
          src={dataProjects.image[0]} 
          alt="Présentation projet" 
        />
    </div>
    <h2 className="card-title">
        {dataProjects.title}
    </h2>
    <p className="card-content">
        {dataProjects.description}
    </p>
    <h3 className="card-lang">Langage utilisés</h3>

    <div className="card-skills">
  {dataProjects.skills.map((skill, index) => (
    <p key={index} className="skill-item">
      {skill}
      {index < dataProjects.skills.length - 1 && ''}
    </p>
  ))}
</div>

</Link>)
}
);
    return (
      <div className="container">
        <Carousel 
          responsive={responsive}>

        {listProjects}
  
        </Carousel>
      </div>

    )
    
}

export default Slider