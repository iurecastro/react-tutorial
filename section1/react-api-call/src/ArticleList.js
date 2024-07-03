import Article from './Article';

const ArticleList = ({ articles }) => {
  if (!articles || !Array.isArray(articles)) {
    return <div>No articles available.</div>;
  }
  const renderedArticles = articles.map((article) => {
    return <Article key={article.pageid} article={article} />;
  });

  return <div>{renderedArticles}</div>;
};

export default ArticleList;