import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <h1>My BLog</h1>
        <Link to="/">Home</Link>
        <Link
          to="/create"
          //   style={{
          //     color: 'white',
          //     backgroundColor: '#f1356d',
          //     borderRadius: '8px',
          //   }}
        >
          New Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
