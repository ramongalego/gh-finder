import React, { useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const Repos = () => {
  const githubContext = useContext(GithubContext);
  
  return githubContext.repos.map(repo => (
    <div className='card' key={repo.id}>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  ));
};

export default Repos;
