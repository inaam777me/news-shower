
import ArticlesList from '../components/ArticlesList';

const Home = () => {
  return (
    <>
      <div className='m-4'>
        <h1 className="text-4xl font-bold mb-4">Latest Articles</h1>
        <ArticlesList />
      </div>
    </>
  );
};

export default Home;
