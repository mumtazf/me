import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="home-link" key="home-button">
            <a href ="#home">
              Home
            </a>
          </li>
          <li>
          <a href = "#aboutme">
              Explore
          </a>
          </li>

          <li>
          <a href = "#experience">
              Experience
          </a>
          </li>

          <li>
          <a href = "#blog">
              Blog
          </a>
          </li>

          <li>
          <Link to = "#contact">
              Contact
          </Link>
          </li>

        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;