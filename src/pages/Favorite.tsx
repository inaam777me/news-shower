import Navbar from '../components/Navbar'
import About from '../components/About'
import { FavoriteListAll } from '../components/Favoritelist';

const Favorite = () => {
  return (
    <>
      <Navbar />
      <div className='m-4'>
        <h1 className="text-4xl font-bold mb-4">Favorite Articles</h1>
        <FavoriteListAll />
      </div>
      <About />
    </>
  );
};

export default Favorite;