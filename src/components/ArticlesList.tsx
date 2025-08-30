import React from 'react';
import { useState, useEffect } from 'react';
import { fetchArticles } from '../api/articles';
import Card from './Card';

const ArticlesList: React.FC = () => {
    const [articles, setArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchArticles()
            .then(setArticles)
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="ml-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {loading && <p>Loading...</p>}
            {articles.map((article) => (
                <Card
                    key={article.id}
                    title={article.title}
                    description={article.summary}
                    imageUrl={article.image_url}
                    url={article.url}
                    id={article.id}
                />
            ))}
        </div>
    );
};

export default ArticlesList;

