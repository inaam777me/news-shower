import { fetchArticles } from '../api/articles';
import { useEffect, useState } from 'react';
import Card from './Card';

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

    useEffect(() => {
        fetchArticles().then((data) => setArticles(data));
    }, []);

    return (
        <ul>
            {favorites.length === 0 ? (
                <li>No favorite articles</li>
            ) : (
                favorites.map(id => {
                    const article = articles.find((a: any) => a.id === id);
                    return article ? (
                        <Card
                            key={article.id}
                            title={article.title}
                            description={article.summary}
                            imageUrl={article.image_url}
                            url={article.url}
                            id={article.id}
                            bool={true}
                        />
                    ) : null;
                })
            )}
        </ul>
    );
}
