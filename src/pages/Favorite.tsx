import { FavoriteListAll } from '../components/Favoritelist';

const Favorite = () => {
  return (
    <>
      <div className='m-4'>
        <h1 className="text-4xl font-bold mb-4">Favorite Articles</h1>
        <FavoriteListAll />
      </div>
    </>
  );
};

export default Favorite;