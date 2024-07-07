import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" placeholder="Enter your search shoes." />
      </div>

      <div className="profile-container">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#heart" className="nav-icon-link">
          <FiHeart className="heart-icon" />
        </a>

        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#cart" className="nav-icon-link">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>

        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#user" className="nav-icon-link">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
