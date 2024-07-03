
import logo from './wikipedia-logo.png';
import './App.css';

import { useState } from 'react';

import { search } from './api';
import SearchBar from './SearchBar';
import ArticleList from './ArticleList';



const App = () => {

  const [articles, setArticles] = useState([]);

  const handleSearch = async (searchTerm) => {
    const results = await search(searchTerm);
    setArticles(results);
  };


  return (
    <>
      <header>
        <img src={logo} alt='wikipedia' />
        <div>Wikipedia Search</div>
        <SearchBar onSearch={handleSearch} />
      </header>

      <main id='searchResult'>
        <ArticleList articles={articles} />
      </main>

    </>
  );

}

export default App;
