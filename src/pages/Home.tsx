import Navbar from '../components/Navbar'
import About from '../components/About'
import ArticlesList from '../components/ArticlesList';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='m-4'>
        <h1 className="text-4xl font-bold mb-4">Latest Articles</h1>
        <ArticlesList />
      </div>
      
      <About />
    </>
  );
};

export default Home;
