import { fetchArticles } from '../api/articles';
import { useEffect, useState } from 'react';
import Card from './Card';
import { Search } from './search';

const favorites: number[] = [];


export function addToFavorites(id: number) {
    favorites.push(id);
}

export function getFavorites() {
    return favorites;
}

export function deleteFavorites(id: number) {
    for (let i = 0; i < favorites.length; i++) {
        if (favorites[i] === id) {
            favorites.splice(i, 1);
            break;
        }
    }
}



export function FavoriteListAll() {
    const [articles, setArticles] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchArticles().then((data) => setArticles(data));
    }, []);

    const filteredFavorites = favorites
        .map(id => articles.find(a => a.id === id))
        .filter(article => article && article.title.toLowerCase().includes(searchQuery.toLowerCase()));


    return (
        <div className="m-4">
            <div className='m-4'>
                <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <h1 className="text-4xl font-bold mb-4">Favorite Articles</h1>
            </div>

            <ul className="ml-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {filteredFavorites.length === 0 ? (
                    <li>No favorite articles found</li>
                ) : (
                    filteredFavorites.map(article => (
                        article && (
                            <Card
                                key={article.id}
                                title={article.title}
                                description={article.summary}
                                imageUrl={article.image_url}
                                url={article.url}
                                id={article.id}
                                bool={true}
                            />
                        )
                    ))
                )}
            </ul>
        </div>
    );
}