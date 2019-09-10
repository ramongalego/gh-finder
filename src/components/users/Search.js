import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { searchUsers, clearUsers, users } = githubContext;
  const { setAlert, removeAlert } = alertContext;

  const [text, setText] = useState('');

  const handleChange = e => {
    const { target: { value } } = e;

    setText(value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
      removeAlert();
    }
  }

  return (
    <div>
      <form 
        className='form'
        onSubmit={handleSubmit}
      >
        <input 
          type='text' 
          name='text' 
          placeholder='Search Users...' 
          value={text}
          onChange={handleChange}
        />
        <button type='submit' className='btn btn-dark btn-block'>Search</button>
      </form>
      {users.length > 0 && 
      <button 
        className='btn btn-light btn-block my' 
        onClick={clearUsers}
      >
        Clear
      </button>}
    </div>
  );
}

export default Search;
