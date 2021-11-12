import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs');

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  // const [name, setName] = useState('ola');
  // const handleName = () => {
  //   setName('caca');
  // };

  return (
    <div>
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading</div>}
        {blogs && <BlogList blogs={blogs} header="All Blogs!" />}
        {/* <BlogList
          blogs={blogs.filter((blog) => blog.author === 'Yola')}
          header="Yola's Blogs!"
        /> */}
        {/* <p>{name}</p>
        <button onClick={handleName}>change</button> */}
      </div>
    </div>
  );
};

export default Home;
