import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/songs" className="nav-link">
          Songs
        </Link>
        <Link to="/songs/new" className="nav-link">
          New Song
        </Link>
        <Link to ="/artists"  className="nav-link">
          Artists
        </Link>
      </div>
    </nav>
  );
}