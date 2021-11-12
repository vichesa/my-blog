import { Link } from 'react-router-dom';

const BlogList = ({ blogs, header }) => {
  return (
    <div>
      <div className="blog-list">
        <h2>{header}</h2>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Author: {blog.author}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
