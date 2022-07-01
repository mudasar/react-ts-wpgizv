import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import axios from 'axios';
import { useQuery } from 'react-query';
import './style.css';

export default function App() {
  const { todos, setTodos } = useState();

  const { isLoading, error, data } = useQuery('repoData', () =>
     axios.get('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
       res.data
    )

  // useEffect(() => {
  //   console.log('it is loaded');
  //   axios.get('https://jsonplaceholder.typicode.com/todos').then((result) => {
  //     console.table(result.data);
  //   });
  // }, []);

  console.log(data);

  return (
    <div>
      <h1>Hello To Hooked Todos!</h1>
      {isLoading && <Loading /> }
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
