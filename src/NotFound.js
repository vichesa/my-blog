import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <div className="not-found">
        <h2>Sorry...</h2>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

export default NotFound;
