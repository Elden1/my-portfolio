import './assets/style.scss';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

let Header = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/project/");

  useEffect(() => {

    function handleScroll() {
      const header = document.getElementById("header");
      const sticky = header.offsetTop;
      if (isProjectPage) {
        header.classList.add("sticky-relative");
        header.classList.remove("atTop");
      } else {
        if (window.scrollY  > sticky) {
          header.classList.add("sticky");
          header.classList.remove("atTop");
        } else {
          header.classList.remove("sticky");
          header.classList.add("atTop");
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isProjectPage]);
      
  const navBarClass = isProjectPage ? 'nav-bar sticky-relative' : 'nav-bar atTop';

  return (
    <header>
      <nav className={navBarClass} id="header">
        <div className="nav-top">
          {!isProjectPage ? (
            <a href="/my-portfolio/"><h2>Back to the top</h2></a>
          ) : (
            <Link to="/my-portfolio/"><h2>Back to the main page</h2></Link>
          )}
        </div>
        {!isProjectPage && (
          <div className="nav-content">
            <a href='#profile-section'><h3>Présentation</h3></a>
            <a href='#projects-section'><h3>Projets</h3></a>
            <a href='#skills-section'><h3>Compétences</h3></a>
            <a href='#contact-section'><h3>Contact</h3></a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;