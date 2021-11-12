import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      //setTimeOut just for see the loading, do not use it in real project
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error('Cannot fetch the data');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err.message);
          if (err.name === 'AbortError') {
            console.log('Fetch aborted');
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 2000);
    return () => console.log(abortCont.abort());
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
