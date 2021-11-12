import { useState } from 'react';
import { useHistory } from 'react-router';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);

    setIsPending(true);

    setTimeout(() => {
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { 'Content-TYpe': 'application/json' },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log('new blog added');
        setIsPending(false);
      });
      // history.go(-1);
      history.push('/');
    }, 2000);
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          require="true"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Body</label>
        <textarea
          require="true"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Yola">Yola</option>
          <option value="Caca">Caca</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {/* {isPending && <button>Adding Blog</button>} */}
      </form>
    </div>
  );
};

export default Create;
