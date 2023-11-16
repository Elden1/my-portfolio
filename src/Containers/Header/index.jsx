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
      <nav className={navBarClass} id="header">
        <div className="nav-top">
          {!isProjectPage ? (
            <a href="/"><h2>Back to the top</h2></a>
          ) : (
            <Link to="/"><h2>Back to the main page</h2></Link>
          )}
        </div>
        {!isProjectPage && (
          <div className="nav-content">
            <a href='#anchor1'><h3>Présentation</h3></a>
            <a href='#anchor2'><h3>Projets</h3></a>
            <a href='#anchor3'><h3>Compétences</h3></a>
            <a href='#anchor4'><h3>Contact</h3></a>
          </div>
        )}
      </nav>
  );
}

export default Header;